<template>
  <div class="hello">
    <form
      name="delivery-request"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <header>
        <h2>Planet Express Delivery Request</h2>
      </header>
      <input type="hidden" name="form-name" value="delivery-request" />
      <input type="hidden" id="bot" name="bot" />
      <div>
        <label>
          <span>Contents</span>
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
              <span>{{ member }}</span>
            </label>
          </li>
        </fieldset>
        <label>
          <span>Recipient</span>
          <input
            id="recipient"
            name="recipient"
            type="text"
            v-model="form.recipient"
          />
        </label>
        <label>
          <span>Destination</span>
          <input
            id="destination"
            name="destination"
            type="text"
            v-model="form.destination"
          />
        </label>
        <label>
          <span>Notes</span>
          <input id="notes" name="notes" type="text" v-model="form.notes" />
        </label>
        <label>
          <span>Appearances</span>
          <input
            id="appearances"
            name="appearances"
            type="text"
            v-model="form.appearances"
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
      const payload = {
        "form-name": "delivery-request",
        ...this.form
      };
      axios
        .post("/", this.encode(payload), axiosConfig)
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
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

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

form > div > label > span,
legend {
  text-align: right;
  width: 100%;
  margin: 0 0 5px 0;
  text-align: left;
  display: block;
}

label {
  display: block;
}

input[type="text"],
input[type="textarea"] {
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 2px;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0.5em 0.6em;
  margin-bottom: 0.5em;
  width: 100%;
  &:focus,
  &:active {
    outline: 0.25rem auto #008ea0ff;
  }
}

fieldset > li {
  display: block;
  width: 100%;
  text-align: left;
}

@media (min-width: 1200px) {
  form > div > label > span,
  legend {
    width: 15%;
    padding-right: 1em;
    display: inline-block;
  }
  input[type="text"],
  input[type="textarea"] {
    width: 50%;
  }
  fieldset > li {
    display: inline-block;
    width: auto;
  }
}

.styled-checkbox {
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + span {
    position: relative;
    cursor: pointer;
    padding: 0;
  }
  & + span:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
  }
  &:checked + span:before {
    background: #008ea0ff;
  }
  &:checked + span:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
}

.submit-button {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  background-color: #282c34;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 0 9px #95a5a6;
  box-shadow: 0 9px #95a5a6;
  font-size: 1.2em;
  color: #fff;
  cursor: pointer;
  margin-top: 1em;
}
</style>
