<template>
  <div class="articles">
      <h1 v-if="title">{{ title }}</h1>
      <div class="button" @click="addTodo">Получить заголовок</div>
      <div class="article" v-for="(todo, i) in todos" :key="i">
          <div class="article__name">{{ todo.title }}</div>
          <div class="article__text">{{ todo.text }}</div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  computed: {
    title () {
      return this.$store.state.todos.title
    },
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
        axios
        .get('https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json')
        .then(r => r.data)
        .then(data => {
          this.$store.commit('todos/setTitle', data.fruit)
        })
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style lang="sass">
    .articles 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 100px;
    .article 
        padding: 25px 0px;
        width: 60%;
        &__name 
            font-size: 21px;
            font-weight: bold;
            margin-bottom: 15px;
    .done
        text-decoration: line-through;
    .button 
        width: 60%;
</style>