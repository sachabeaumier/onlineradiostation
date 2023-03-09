/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('producers').del()
  await knex('producers').insert([
    {
      producer_id: 0,
      producer_name: 'Ben UFO',
      email_contact: 'hessleaudio@gmail.com',
      producer_description: 'experimental UK bass',
    },
    {
      producer_id: 1,
      producer_name: 'Call Super',
      email_contact: 'JRS@sameheads.co.de',
      producer_description: 'panorama house vibes',
    },
    {
      producer_id: 2,
      producer_name: 'Objekt',
      email_contact: 'TJHertz@nativeinstruments.com',
      producer_description: 'tresor techno',
    },
    {
      producer_id: 3,
      producer_name: 'Will Bankhead',
      email_contact: 'TTT@trilogytapes.com',
      producer_description: 'underground',
    },
    {
      producer_id: 4,
      producer_name: 'PLO Man',
      email_contact: 'actingpressrecords@gmail.com',
      producer_description: 'skrrrrt',
    },
    {
      producer_id: 5,
      producer_name: 'Powder',
      email_contact: 'bornfree@gmail.jp',
      producer_description: 'ambient air',
    },
  ])
}
