import { BaseEntity, Entity, Prop, PropType } from "@casejs/case";
import { PokemonType, pokemons } from "../seeds/pokemon";

@Entity({
  seedCount: 151, // Don't forget Mew !
})
export class Pokemon extends BaseEntity {
  @Prop({
    seed: (index: number) => pokemons[index].name,
  })
  name: string;

  @Prop({
    type: PropType.Enum,
    seed: (index: number) => pokemons[index].type,
    options: {
      enum: PokemonType,
    },
  })
  type: PokemonType;

  @Prop({
    seed: (index: number) =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
  })
  image: string;
  // Learn more about CASE Entities and how to add properties here: https://docs.case.app/properties
}
