import { it } from "node:test";
import assert from "node:assert";
import { heroesFindAll, heroesFindByName } from "../../dist/api/heroes.js";
import { mockAxios } from "../mocks/axios.js";

it("should find the heroes", async () => {
  const expected = [
    {
      id: 1,
      game_id: 2,
      name: "Countess",
      display_name: "Countess",
      image: "https://image.url",
      stats: [1, 2, 3],
      classes: ["class1", "class2"],
      roles: ["role1", "role2"],
      abilities: [],
      base_stats: [],
    },
    {
      id: 2,
      game_id: 2,
      name: "Crunch",
      display_name: "Crunch",
      image: "https://image.url",
      stats: [3, 4, 5],
      classes: ["class3", "class4"],
      roles: ["role3", "role4"],
      abilities: [],
      base_stats: [],
    },
  ];

  const client = mockAxios(expected);
  const withClient = heroesFindAll(client);
  const response = await withClient();
  assert.deepEqual(response, expected);
});

it("should find a hero by name", async () => {
  const expected = {
    id: 2,
    game_id: 2,
    name: "Crunch",
    display_name: "Crunch",
    image: "https://image.url",
    stats: [3, 4, 5],
    classes: ["class3", "class4"],
    roles: ["role3", "role4"],
    abilities: [],
    base_stats: [],
  };

  const client = mockAxios(expected);
  const withClient = heroesFindByName(client);
  const response = await withClient();
  assert.deepEqual(response, expected);
  assert.strictEqual(response.name, expected.name);
});
