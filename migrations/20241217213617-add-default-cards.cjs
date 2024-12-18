/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        name: 'Fire crab',
        price: 9.99,
        description: 'The Fire Crab is a large, turtle-like creature native to Fiji, notable for its jeweled shell that sparkles with precious gems. It defends itself by shooting flames from its rear end when threatened, making it both a dazzling and dangerous sight.',
        trade_id: null,
        picture_id: 'fire_crab',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Flobberworm',
        price: 19.99,
        description: 'The Flobberworm is a dull, herbivorous creature that resembles a thick, black worm and grows up to ten inches long. Known for its minimal activity, it spends most of its time eating vegetation and is considered one of the most boring magical beasts.',
        trade_id: null,
        picture_id: 'flobberworm',
        created_at: new Date(),
        updated_at: new Date(),
      },{
        name: 'Giant squid',
        price: 20.87,
        description: 'The Giant Squid is a colossal sea creature, known for its immense size and powerful tentacles that allow it to navigate and hunt in deep ocean waters.',
        trade_id: null,
        picture_id: 'giant_squid',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Hippogriff',
        price: 29.99,
        description: 'The Hippogriff is a magical creature with the front legs, wings, and head of a giant eagle and the body, hind legs, and tail of a horse. Known for its fierce and proud nature, it is a symbol of courage and strength.',
        trade_id: null,
        picture_id: 'hippogriff',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Lunarynix',
        price: 15.99,
        description: 'Lunarynix is a legendary guardian of ancient wisdom, said to appear only in moments of profound need or to those seeking enlightenment in the mystical forest.',
        trade_id: null,
        picture_id: 'lunarynix',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Phoenix',
        price: 25.99,
        description: 'The Phoenix is a magnificent bird known for its ability to burst into flames and be reborn from its ashes. It is a symbol of renewal, transformation, and the cycle of life and death.',
        trade_id: null,
        picture_id: 'phoenix',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Basilisk',
        price: 35.99,
        description: 'The Basilisk is a giant serpent known as the King of Serpents, feared for its deadly gaze that can kill with a single glance. It is one of the most dangerous magical creatures in the wizarding world.',
        trade_id: null,
        picture_id: 'basilisk',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Dragon',
        price: 45.99,
        description: 'The Dragon is a powerful and majestic creature known for its ability to breathe fire and fly. It is a symbol of strength, courage, and magic, and is revered in many cultures as a guardian and protector.',
        trade_id: null,
        picture_id: 'dragon',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Unicorn',
        price: 55.99,
        description: 'The Unicorn is a mythical horse-like creature with a single spiraling horn on its forehead. Known for its purity, grace, and healing powers, it is a symbol of innocence and magic.',
        trade_id: null,
        picture_id: 'unicorn',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Witch',
        price: 86.99,
        description: 'The Witch is a powerful and magical being who practices witchcraft and sorcery. She is known for her ability to cast spells, brew potions, and perform rituals to harness the forces of nature and the supernatural.',
        trade_id: null,
        picture_id: 'witch',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('items', {
      name: [
        'Fire crab',
        'Flobberworm',
        'Giant squid',
        'Hippogriff',
        'Lunarynix',
        'Phoenix',
        'Basilisk',
        'Dragon',
        'Unicorn',
        'Witch'
      ]
    }, {});
  }
};
