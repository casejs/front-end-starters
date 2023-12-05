<script lang="ts">
  import "bulma/css/bulma.min.css";

  import CaseClient from "@casejs/case-client";
  import { onMount } from "svelte";

  interface Pokemon {
    id: number;
    name: string;
    type: string;
    image: string;
  }

  let pokemons: Pokemon[] = [];

  onMount(async () => {
    const cs = new CaseClient();
    pokemons = await cs.from("pokemon").find<Pokemon>();
  });
</script>

<div class="container">
  <div class="columns">
    <div class="column">
      <h1 class="title is-1">Svelte Starter for CASE</h1>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <p>This is a starter project for Svelte.</p>
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
          {#each pokemons as pokemon}
            <tr>
              <td>
                <img src={pokemon.image} alt="{pokemon.name} image" />
              </td>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.type}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
