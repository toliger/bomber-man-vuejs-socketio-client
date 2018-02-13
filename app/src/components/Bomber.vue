<template>
  <div class="jeu">
    <div class="form-group row">
      <label> pseudo :</label>
      <input v-model="user.name">
    </div>
    <div> le bon message : {{ message }}</div>
    <h1> Bomber Man </h1>
    <div class="chat">
      <div class="messages" v-chat-scroll>
        <p v-for="m in messages" :key="m.id"> {{ m.user }} {{ m.message }}</p>
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
      user: {
        name : 'Jean Eude'
      }
    };
  },

  sockets: {
    connect() {
      console.log('Connection au serveur reussi');
    },
    message(message) {
      this.messages.push({user: this.user.name, message: message});
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
  width: 100vw;
  .chat{
    width: 90vw;
    margin: auto;
    .messages{
      border: 1px solid black;
      height: 20vh;
      overflow: scroll;
      padding: 10px;
      margin: 0px 0px 5px 0px;
    }

    input{
      width:90vw;
      padding: 5px;
    }
  }
}
</style>
