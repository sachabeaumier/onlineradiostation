/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('shows').del()
  await knex('shows').insert([
    {
      id: 1,
      name: 'Hessle Audio Show',
      host: 'Ben UFO',
      genre: 'UK Bass, Techno, House, ',
      description: 'asdasdasd',
      tracklist: 'asdasdasd',
      resource: 'asdasdasd',
    },
    {
      id: 2,
      name: 'PLO_radio',
      host: 'PLO Man',
      genre: 'Ambient, Ambient Techno, House, Deep House, Dub Techno',
      description: 'asdasdasd',
      tracklist: 'asdasdasd',
      resource: 'asdasdasd',
    },
    {
      id: 3,
      name: 'airy',
      host: 'Powder',
      genre: 'Ambient',
      description: 'asdadsd',
      tracklist: 'asdasda',
      resource: 'asdasdasd',
    },
    {
      id: 4,
      name: 'samo DJ Flyer show',
      host: 'Samo DJ',
      genre: 'Outsider House',
      description: 'sadasd',
      tracklist: 'asdasdasd',
      resource: 'asdasdasd',
    },
    {
      id: 5,
      name: 'Chi Town',
      host: 'Spencer Kincy',
      genre: 'Chicago House',
      description: 'asdasd',
      tracklist: 'asdassdasd',
      resource: 'asdasdasssssssd',
    },
    {
      id: 6,
      name: 'Objekt Hour',
      host: 'Objekt',
      genre: 'techno',
      description: 'asdasdasd',
      tracklist: 'asdasdasd',
      resource: 'asdasdasd',
    },
    {
      id: 7,
      name: 'Illian Tape',
      host: 'SKee Mask',
      genre: 'techno, bass',
      description: 'asdafsd',
      tracklist: 'asdasfad',
      resource: 'asdafsdasd',
    },
  ])
}
