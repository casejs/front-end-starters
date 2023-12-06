<script lang="ts">
import CaseClient from "@casejs/case-client";

interface Pokemon {
  id: number;
  name: string;
  type: string;
  image: string;
}

export default {
  data() {
    return {
      pokemons: [] as Pokemon[],
    };
  },
  mounted() {
    this.fetchPokemon();
  },
  methods: {
    async fetchPokemon() {
      const cs = new CaseClient();
      cs.from("pokemon")
        .find<Pokemon>()
        .then((res) => {
          this.pokemons = res;
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">VueJS Starter for CASE</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <p>This is a starter project for VueJS.</p>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pokemon of pokemons">
              <td>
                <img :src="pokemon.image" alt="{{ pokemon.name }} image" />
              </td>
              <td>{{ pokemon.id }}</td>
              <td>{{ pokemon.name }}</td>
              <td>{{ pokemon.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
