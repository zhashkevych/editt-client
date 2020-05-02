<template>
    <Wrapper>
        <div class="publication">
            <button class="publish" type="button" @click="createPublication">
                Опублікувати
            </button>
            <vue-tags-input
                v-model="tag"
                :tags="tags"
                @tags-changed="onHashEnter"
                placeholder="Додати тег"
            />
            <medium-editor
                class="editt-editor title"
                custom-tag="h1"
                :text="title"
                :options="options.title"
                @edit="onEdit('title', $event)"
            />
            <medium-editor
                class="editt-editor article-info"
                :text="author"
                :options="options.author"
                @edit="onEdit('author', $event)"
            />
            <label v-if="!imageLink" class="preview">
                Додати прев'ю
                <input type="file" accept="image/*" @change="onImageChange" />
            </label>
            <img :src="imageLink" class="article-image" alt v-else />
            <medium-editor
                class="editt-editor article-body"
                :text="body"
                @edit="onEdit('body', $event)"
                :options="options.body"
            />
        </div>
    </Wrapper>
</template>

<script>
import editor from "vue2-medium-editor";
import VueTagsInput from "@johmun/vue-tags-input";
import Wrapper from "@/components/Wrapper";
import { api } from "@/utils";

export default {
    name: "CreatePublication",
    components: {
        "medium-editor": editor,
        Wrapper,
        VueTagsInput
    },
    data() {
        return {
            tag: "",
            tags: [],
            title: "",
            author: "",
            imageLink: "",
            body: "",
            options: {
                title: {
                    placeholder: {
                        text: "Назва"
                    }
                },
                author: {
                    placeholder: {
                        text: "Твоє ім'я"
                    }
                },
                body: {
                    placeholder: {
                        text: "Твоя історія..."
                    }
                }
            }
        };
    },
    mounted() {
        const storyJSON = localStorage.getItem("story");
        if (storyJSON) {
            const story = JSON.parse(storyJSON);
            Object.keys(story).forEach(key => (this[key] = story[key]));
        }
    },
    methods: {
        saveToStorage() {
            localStorage.setItem("story", JSON.stringify(this.$data));
        },
        clearStorage() {
            localStorage.setItem("story", JSON.stringify({}));
        },
        stripTags(str) {
          return str.replace(/<\/?[^>]+(>|$)/g, "")
        },
        onHashEnter(tags) {
            this.tags = tags;
            this.saveToStorage();
        },
        onEdit(field, operation) {
            this[field] = operation.api.origElements.innerHTML;
            this.saveToStorage();
        },
        async onImageChange(e) {
            const files = e.target.files;
            if (!files.length) return;
            const formData = new FormData();
            formData.append("file", files[0]);
            try {
                const res = await api("upload", {
                    method: "POST",
                    body: formData
                });
                const { url } = await res.json();
                this.imageLink = url;
                this.saveToStorage();
            } catch (e) {
                console.error(e);
            }
        },
        async createPublication() {
            const postData = {
                title: this.stripTags(this.title),
                author: this.stripTags(this.author),
                body: this.body,
                imageLink: this.imageLink,
                tags: this.tags.map(tag => tag.text)
            };
            try {
                const res = await api("publications", {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    }
                });
                const { id } = await res.json();
                this.clearStorage();
                this.$router.push(`/publications/${id}`)
            } catch (e) {
                console.error(e);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.publication {
    max-width: 60%;
    margin: 0 auto;
    text-align: left;

    @include tablet {
        max-width: 80%;
    }

    @include mobile {
        max-width: 100%;
    }
}

.editt-editor {
    position: relative;

    &:after {
        color: #b3b3b1;
        font-style: normal;
    }

    &:after,
    &:before {
        margin-top: 0;
        margin-bottom: 0;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &:not(:empty):before {
        content: attr(data-placeholder);
        display: block;
        position: absolute;
        right: 100%;
        opacity: 1;
        border-right: 1px solid rgba(0, 0, 0, 0.15);
        padding: 0 12px;
        margin-right: 5px;
        transition: all 0.3s;
    }

    &.medium-editor-placeholder {
        &:before {
            opacity: 0;
        }
    }
}

.title {
    margin: 0;
}

.article {
    &-info {
        color: #9b9b9b;
        margin: 0 0 1rem 0;
    }

    &-image {
        max-width: 100%;
    }

    &-body {
        line-height: 1.58;
        margin-top: 20px;

        &::v-deep p {
            margin: 20px 0 0 0;
        }
    }
}

.hashtags {
    min-height: 20px;
}

.preview {
    & input {
        display: none;
    }
}

.publish {
  background: #65587f;    
  border: none;
  padding: 5px 10px;
  color: white;
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin-bottom: 10px;
}

.vue-tags-input {
    font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
    color: #2e2e2e;
    padding-bottom: 5px;

    &::v-deep {
        .ti-input {
            border-top: none;
            border-left: none;
            border-right: none;
        }

        .ti-tag {
            background-color: transparent;
            color: #000;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }

        input {
            font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
            color: #2e2e2e;
        }
    }
}
</style>
