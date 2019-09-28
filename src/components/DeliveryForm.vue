<template>
  <div class="hello">
    <form
      name="delivery-request"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="delivery-request" />
      <input type="hidden" id="bot" name="bot" />
      <div>
        <label>
          Contents
          <input
            id="contents"
            name="contents"
            type="text"
            v-model="form.contents"
          />
        </label>
        <fieldset>
          <legend>Crew</legend>
          <li v-for="member in crew" :key="member">
            <label>
              <input
                class="styled-checkbox"
                name="chosenCrew"
                type="checkbox"
                :value="member"
                v-model="form.chosenCrew"
              />
              {{ member }}
            </label>
          </li>
        </fieldset>
        <label>
          Recipient
          <input
            id="recipient"
            name="recipient"
            type="text"
            v-model="form.recipient"
          />
        </label>
        <label>
          Destination
          <input
            id="destination"
            name="destination"
            type="text"
            :value="form.destination"
          />
        </label>
        <label>
          Notes
          <input id="notes" name="notes" type="text" :value="form.notes" />
        </label>
        <label>
          Appearances
          <input
            id="appearances"
            name="appearances"
            type="text"
            :value="form.appearances"
          />
        </label>
      </div>
      <button type="submit" class="submit-button">Request Job</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeliveryForm",
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        contents: "",
        chosenCrew: [],
        recipient: "",
        destination: "",
        notes: "",
        appearances: ""
      },
      crew: [
        "Leela",
        "Fry",
        "Bender",
        "Amy",
        "Zoidberg",
        "Prof. Farnsworth",
        "Hermes"
      ]
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "delivery-request",
          ...this.form
        }),
        axiosConfig
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
