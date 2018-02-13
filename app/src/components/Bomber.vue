<template>
  <div class="jeu">
    <div class="form-group row">
      <div class="input-field col s6">
        <input placeholder="Placeholder" id="first_name" type="text" class="validate">
        <label for="first_name">First Name</label>
      </div>
      <div class="input-field col s6">
        <a class="waves-effect waves-light btn">button</a>
        <label for="last_name">Last Name</label>
      </div>
    </div>
    <div> le bon message : {{ message }}</div>
    <h1> Bomber Man </h1>
    <div class="chat">
      <div class="messages" v-chat-scroll>
        <p v-for="m in messages" :key="m.id"> {{ m }}</p>
      </div>
      <input id="chat_input" v-model="message" @keyup.enter="plop">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  data() {
    return {
      messages: ['Le bon chat'],
      message: '',
    };
  },

  sockets: {
    connect() {
      console.log('Connection au serveur reussi');
    },
    message(message) {
      this.messages.push(message);
    },
  },

  methods: {
    plop() {
      this.$socket.emit('message', this.message);
      this.message = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jeu{
  .chat{
    .messages{
      border: 1px solid black;
      height: 20vh;
      overflow: scroll;
    }

    input{
      width: 100vw;
    }
  }
}
</style>
