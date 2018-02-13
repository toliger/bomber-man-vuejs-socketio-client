<template>
  <div class="jeu">
    <div class="form-group row">
      <div class="input-group mb-3 pseudo">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Pseudo</span>
        </div>
        <input v-model="user.name" class="form-control" placeholder="Username">
      </div>
    </div>
    <h1> Bomber Man </h1>
    <div class="chat">
      <div class="messages" v-chat-scroll>
        <p v-for="m in messages" :key="m.id"> <span id="user">{{ m.user }} : </span> {{ m.message }}</p>
      </div>
      <div class="input-group mb-3">
        <input id="chat_input" class="form-control" type="text" v-model="message" @keyup.enter="newMessage">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" v-on:click="newMessage">Button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      messages: ['Le bon chat'],
      message: '',
      user: {
        name: 'Jean Eude',
      },
    };
  },

  sockets: {
    connect() {
    },
    message(message) {
      this.messages.push(message);
    },
  },

  methods: {
    newMessage() {
      this.$socket.emit('message', { user: this.user.name, message: this.message });
      this.message = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jeu{
  width: 100vw;
  .pseudo{
    width: 30vw;
    margin-left: 2.5vw;
  }

  .chat{
    width: 90vw;
    margin: auto;
    .messages{
      border: 1px solid black;
      height: 20vh;
      overflow: scroll;
      padding: 10px;
      margin: 0px 0px 5px 0px;

      p{
        text-align: left;
      }

      #user{
        font-weight: bold;
      }
    }

    input{
      padding: 5px;
    }
  }
}
</style>
