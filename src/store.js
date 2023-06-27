import { reactive } from 'vue';

export const store = reactive({
    myUrl: 'https://api.themoviedb.org/3/search/movie?api_key=0ee75ca534ff5438e3d132bce392f649',
    searchText: '',
})