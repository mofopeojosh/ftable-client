<template>
  <div>

    <div class="px-16 mb-20">

      <header class="py-4 tracking-widest text-purple-700">
        This page doesn't have a title
      </header>

      <hr class="mb-10">

      <div class="flex items-center justify-between">

        <div class="w-1/4"></div>

        <div class="w-1/4 mx-4">

          <small class="font-light">That cute little button let's you select a random item.
            It helps you choose from one of those seemingly useless boxes below.
            There really isn't that much to it.
          </small>

          <a href="" @click.prevent="getRandomItem" class="my-5 inline-block text-purple-500">
            Play
            <i class="material-icons align-middle">arrow_forward</i>
          </a>

        </div>

        <div class="w-1/3">
          <div class="bg-gray-200 rounded-full">
            <div class="px-16 py-8 text-center">

              <i style="font-size: 90px;" class="material-icons text-gray-700" v-if="randomNumber == null">help</i>
              <div class="inline-flex justify-center rounded-full w-24 h-24 bg-gray-700 text-white" v-else>
                <span class="self-center text-6xl">{{randomNumber + 1}}</span>
              </div>

              <h5 class="my-2 text-purple-500" v-if="randomContent.name">{{randomContent.name}}</h5>
              <h5 class="my-2 text-purple-500" v-else>Did you?</h5>

              <small class="font-light" v-if="randomContent.description">
                {{randomContent.description}}
              </small>
              <small class="font-light" v-else>
                No really. Did you read the instruction to the left.
                If you did it's expected you'd have tried it at least.
              </small>

            </div>
          </div>
        </div>

      </div>

      <div class="flex px-4 my-6 mt-10 items-center">

        <input v-model="searchQuery"
               class="rounded-full border border-gray-400 w-1/4 bg-transparent h-10 px-4"
               placeholder="Search">

        <hr class="ml-5 flex-1">

      </div>

      <div class="flex flex-row flex-wrap content-start">
        <div class="px-4 my-6 w-1/4">

          <ContentCard class="bg-gray-200">
            <a href="" class="p-8 text-center" @click.prevent="showContentForm = true">
              <i style="font-size: 90px;" class="material-icons text-gray-700">add_circle</i>
              <!--<div class="inline-block rounded-full w-24 h-24 bg-gray-700">-->
              <!--</div>-->
              <h5 class="font-normal my-2 text-purple-500">Add New</h5>
              <small class="font-light">
                There's no context. Just add anything that comes to mind. There are no rules.
              </small>
            </a>
          </ContentCard>

        </div>

        <div v-for="(content, index) in filteredContents" :key="index" class="px-4 my-6 w-1/4">

          <ContentCard
            class="bg-white border border-purple-200"
            :content="content"
            @view="handleViewAction(index)"
            @edit="handleEditAction(index)"
            @delete="deleteContent(index)"/>
        </div>
      </div>

      <div class="flex px-4 my-6 mt-10 items-center">
        <span class="text-lg text-gray-400">
          Features
        </span>
        <hr class="ml-5 flex-1">
      </div>

      <div class="flex flex-row flex-wrap content-start">

        <div class="px-4 my-6 w-1/4">
          <ContentCard class="border bg-green-200">
            <a href="" class="p-8 text-center" @click.prevent="showContentForm = true">
              <h5 class="font-normal my-2 text-purple-500">New on client</h5>
              <small class="font-light">
                CRUD, Modal, Search,
              </small>
            </a>
          </ContentCard>
        </div>

        <div class="px-4 my-6 w-1/4">
          <ContentCard class="border bg-red-200">
            <a href="" class="p-8 text-center" @click.prevent="showContentForm = true">
              <h5 class="font-normal my-2 text-purple-500">Coming in client</h5>
              <small class="font-light">
                CRUD, Lightbox, Test, Alerts(With transition), Animation
              </small>
            </a>
          </ContentCard>
        </div>

        <div class="px-4 my-6 w-1/4">
          <ContentCard class="border bg-yellow-200">
            <a href="" class="p-8 text-center" @click.prevent="showContentForm = true">
              <h5 class="font-normal my-2 text-purple-500">New on server</h5>
              <small class="font-light">
                CRUD, Lightbox, Test, Alerts(With transition), Animation
              </small>
            </a>
          </ContentCard>
        </div>

        <div class="px-4 my-6 w-1/4">
          <ContentCard class="border bg-blue-200">
            <a href="" class="p-8 yellow-center" @click.prevent="showContentForm = true">
              <h5 class="font-normal my-2 text-purple-500">Coming in server</h5>
              <small class="font-light">
                CRUD, Lightbox, Test, Alerts(With transition), Animation
              </small>
            </a>
          </ContentCard>
        </div>

      </div>
    </div>

    <Modal v-model="showContentForm">
      <div class="bg-white rounded p-5">
        <h4>Add a new content {{editIndex}}</h4>
        <form @submit.prevent="editIndex == null ? addContent() : editContent()">
          <input v-model="form.name" class="my-4 w-full border rounded p-2" type="text" placeholder="Name"/>
          <br>
          <textarea v-model="form.description" class="my-4 w-full border rounded p-2" type="text"
                    placeholder="Description"></textarea>
          <br>
          <input v-model="form.link" class="my-4 w-full border rounded p-2" type="text" placeholder="link"/>

          <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Save
          </button>
        </form>
      </div>
    </Modal>

    <SideBox v-model="showContentDetails" title="View Details">
      <div class="py-6">
        Name: {{contentDetails.name}}
        <hr class="my-4">

        Description: {{contentDetails.description}}
        <hr class="my-4">

        Link: {{contentDetails.link}}
      </div>
    </SideBox>

  </div>
</template>

<script>
// @ is an alias to /src
import ContentCard from '../components/ContentCard';
import Modal from '../components/Modal';
import SideBox from '../components/SideBox';

export default {
    name: 'home',
    components: {
        SideBox,
        Modal,
        ContentCard,
    },
    data() {
        return {
            contents: [],
            showContentForm: false,
            form: {
                name: '',
                description: '',
                link: '',
            },
            searchQuery: '',
            randomNumber: null,
            randomContent: {},
            editIndex: null,
            contentDetails: {},
            showContentDetails: false,
        };
    },
    mounted() {
        this.getContents();
    },
    computed: {
        filteredContents() {
            return this.contents.filter(content => content.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
    methods: {
        getContents() {
            this.$store.dispatch('content/getContents')
                .then(res => {
                    this.contents = res.data.data;
                });
        },

        addContent() {
            this.$store.dispatch('content/addContent', this.form)
                .then(res => {
                    this.flash('Item created successfully', 'success');
                    this.form = {};
                    this.contents.push(res.data.data);
                    this.showContentForm = false;
                })
                .catch(err => {
                    this.flash('Sorry! We couldn\'t process your request', 'error', {timeout: 3});
                    console.log(err);
                });
        },

        handleEditAction(index) {
            this.showContentForm = true;
            this.form = this.contents[index];
            this.editIndex = index;
        },

        handleViewAction(index) {
            this.showContentDetails = true;
            this.contentDetails = this.contents[index];
        },


        editContent() {
            this.$store.dispatch('content/editContent', this.form)
                .then(res => {
                    this.flash('Item updated successfully', 'success');
                    this.form = {};
                    this.$set(this.contents[this.editIndex], res.data.data);
                    this.showContentForm = false;
                    this.editIndex = null;
                })
                .catch(err => {
                    this.flash('Sorry! We couldn\'t process your request', 'error', {timeout: 3});
                    console.log(err);
                });
        },

        deleteContent(index) {
            let content = this.contents[index];
            this.$dialogs.alert('Are you sure you want to delete?', {title: 'Delete?', size: 'sm'})
                .then(res => {
                    if (res.ok) {
                        this.$store.dispatch('content/deleteContent', content._id)
                            .then(() => {
                                this.flash('Item deleted successfully', 'success');
                                this.getContents();
                            })
                            .catch(err => {
                                this.flash('Sorry! We couldn\'t process your request', 'error', {timeout: 3});
                                console.log(err);
                            });
                    }
                });
        },

        getRandomItem() {
            let contentLength = this.contents.length;
            if (contentLength) {
                this.randomNumber = Math.floor((Math.random() * contentLength));
                this.randomContent = this.contents[this.randomNumber];
            }
        }
    },
};
</script>
