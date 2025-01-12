// https://github.com/evansque/coloraze
const colors = [
  { name: 'Abbey', hex: '#4C4F56', rgb: { r: 76, g: 79, b: 86 } },
  { name: 'Acadia', hex: '#1B1404', rgb: { r: 27, g: 20, b: 4 } },
  {
    name: 'Acapulco',
    hex: '#7CB0A1',
    rgb: { r: 124, g: 176, b: 161 }
  },
  {
    name: 'Aero Blue',
    hex: '#C9FFE5',
    rgb: { r: 201, g: 255, b: 229 }
  },
  {
    name: 'Affair',
    hex: '#714693',
    rgb: { r: 113, g: 70, b: 147 }
  },
  {
    name: 'Akaroa',
    hex: '#D4C4A8',
    rgb: { r: 212, g: 196, b: 168 }
  },
  {
    name: 'Alabaster',
    hex: '#FAFAFA',
    rgb: { r: 250, g: 250, b: 250 }
  },
  {
    name: 'Albescent White',
    hex: '#F5E9D3',
    rgb: { r: 245, g: 233, b: 211 }
  },
  {
    name: 'Algae Green',
    hex: '#93DFB8',
    rgb: { r: 147, g: 223, b: 184 }
  },
  {
    name: 'Alice Blue',
    hex: '#F0F8FF',
    rgb: { r: 240, g: 248, b: 255 }
  },
  {
    name: 'Alizarin Crimson',
    hex: '#E32636',
    rgb: { r: 227, g: 38, b: 54 }
  },
  {
    name: 'Allports',
    hex: '#0076A3',
    rgb: { r: 0, g: 118, b: 163 }
  },
  {
    name: 'Almond',
    hex: '#EED9C4',
    rgb: { r: 238, g: 217, b: 196 }
  },
  {
    name: 'Almond Frost',
    hex: '#907B71',
    rgb: { r: 144, g: 123, b: 113 }
  },
  {
    name: 'Alpine',
    hex: '#AF8F2C',
    rgb: { r: 175, g: 143, b: 44 }
  },
  { name: 'Alto', hex: '#DBDBDB', rgb: { r: 219, g: 219, b: 219 } },
  {
    name: 'Aluminium',
    hex: '#A9ACB6',
    rgb: { r: 169, g: 172, b: 182 }
  },
  {
    name: 'Amaranth',
    hex: '#E52B50',
    rgb: { r: 229, g: 43, b: 80 }
  },
  { name: 'Amazon', hex: '#3B7A57', rgb: { r: 59, g: 122, b: 87 } },
  { name: 'Amber', hex: '#FFBF00', rgb: { r: 255, g: 191, b: 0 } },
  {
    name: 'Americano',
    hex: '#87756E',
    rgb: { r: 135, g: 117, b: 110 }
  },
  {
    name: 'Amethyst',
    hex: '#9966CC',
    rgb: { r: 153, g: 102, b: 204 }
  },
  {
    name: 'Amethyst Smoke',
    hex: '#A397B4',
    rgb: { r: 163, g: 151, b: 180 }
  },
  {
    name: 'Amour',
    hex: '#F9EAF3',
    rgb: { r: 249, g: 234, b: 243 }
  },
  {
    name: 'Amulet',
    hex: '#7B9F80',
    rgb: { r: 123, g: 159, b: 128 }
  },
  {
    name: 'Anakiwa',
    hex: '#9DE5FF',
    rgb: { r: 157, g: 229, b: 255 }
  },
  {
    name: 'Antique Brass',
    hex: '#C88A65',
    rgb: { r: 200, g: 138, b: 101 }
  },
  {
    name: 'Antique Bronze',
    hex: '#704A07',
    rgb: { r: 112, g: 74, b: 7 }
  },
  { name: 'Anzac', hex: '#E0B646', rgb: { r: 224, g: 182, b: 70 } },
  {
    name: 'Apache',
    hex: '#DFBE6F',
    rgb: { r: 223, g: 190, b: 111 }
  },
  { name: 'Apple', hex: '#4FA83D', rgb: { r: 79, g: 168, b: 61 } },
  {
    name: 'Apple Blossom',
    hex: '#AF4D43',
    rgb: { r: 175, g: 77, b: 67 }
  },
  {
    name: 'Apple Green',
    hex: '#E2F3EC',
    rgb: { r: 226, g: 243, b: 236 }
  },
  {
    name: 'Apricot',
    hex: '#EB9373',
    rgb: { r: 235, g: 147, b: 115 }
  },
  {
    name: 'Apricot Peach',
    hex: '#FBCEB1',
    rgb: { r: 251, g: 206, b: 177 }
  },
  {
    name: 'Apricot White',
    hex: '#FFFEEC',
    rgb: { r: 255, g: 254, b: 236 }
  },
  {
    name: 'Aqua Deep',
    hex: '#014B43',
    rgb: { r: 1, g: 75, b: 67 }
  },
  {
    name: 'Aqua Forest',
    hex: '#5FA777',
    rgb: { r: 95, g: 167, b: 119 }
  },
  {
    name: 'Aqua Haze',
    hex: '#EDF5F5',
    rgb: { r: 237, g: 245, b: 245 }
  },
  {
    name: 'Aqua Island',
    hex: '#A1DAD7',
    rgb: { r: 161, g: 218, b: 215 }
  },
  {
    name: 'Aqua Spring',
    hex: '#EAF9F5',
    rgb: { r: 234, g: 249, b: 245 }
  },
  {
    name: 'Aqua Squeeze',
    hex: '#E8F5F2',
    rgb: { r: 232, g: 245, b: 242 }
  },
  {
    name: 'Aquamarine',
    hex: '#7FFFD4',
    rgb: { r: 127, g: 255, b: 212 }
  },
  {
    name: 'Aquamarine Blue',
    hex: '#71D9E2',
    rgb: { r: 113, g: 217, b: 226 }
  },
  {
    name: 'Arapawa',
    hex: '#110C6C',
    rgb: { r: 17, g: 12, b: 108 }
  },
  {
    name: 'Armadillo',
    hex: '#433E37',
    rgb: { r: 67, g: 62, b: 55 }
  },
  {
    name: 'Arrowtown',
    hex: '#948771',
    rgb: { r: 148, g: 135, b: 113 }
  },
  { name: 'Ash', hex: '#C6C3B5', rgb: { r: 198, g: 195, b: 181 } },
  {
    name: 'Asparagus',
    hex: '#7BA05B',
    rgb: { r: 123, g: 160, b: 91 }
  },
  { name: 'Asphalt', hex: '#130A06', rgb: { r: 19, g: 10, b: 6 } },
  {
    name: 'Astra',
    hex: '#FAEAB9',
    rgb: { r: 250, g: 234, b: 185 }
  },
  {
    name: 'Astral',
    hex: '#327DA0',
    rgb: { r: 50, g: 125, b: 160 }
  },
  {
    name: 'Astronaut',
    hex: '#283A77',
    rgb: { r: 40, g: 58, b: 119 }
  },
  {
    name: 'Astronaut Blue',
    hex: '#013E62',
    rgb: { r: 1, g: 62, b: 98 }
  },
  {
    name: 'Athens Gray',
    hex: '#EEF0F3',
    rgb: { r: 238, g: 240, b: 243 }
  },
  {
    name: 'Aths Special',
    hex: '#ECEBCE',
    rgb: { r: 236, g: 235, b: 206 }
  },
  {
    name: 'Atlantis',
    hex: '#97CD2D',
    rgb: { r: 151, g: 205, b: 45 }
  },
  { name: 'Atoll', hex: '#0A6F75', rgb: { r: 10, g: 111, b: 117 } },
  {
    name: 'Atomic Tangerine',
    hex: '#FF9966',
    rgb: { r: 255, g: 153, b: 102 }
  },
  {
    name: 'Au Chico',
    hex: '#97605D',
    rgb: { r: 151, g: 96, b: 93 }
  },
  {
    name: 'Aubergine',
    hex: '#3B0910',
    rgb: { r: 59, g: 9, b: 16 }
  },
  {
    name: 'Australian Mint',
    hex: '#F5FFBE',
    rgb: { r: 245, g: 255, b: 190 }
  },
  {
    name: 'Avocado',
    hex: '#888D65',
    rgb: { r: 136, g: 141, b: 101 }
  },
  {
    name: 'Axolotl',
    hex: '#4E6649',
    rgb: { r: 78, g: 102, b: 73 }
  },
  {
    name: 'Azalea',
    hex: '#F7C8DA',
    rgb: { r: 247, g: 200, b: 218 }
  },
  { name: 'Aztec', hex: '#0D1C19', rgb: { r: 13, g: 28, b: 25 } },
  { name: 'Azure', hex: '#315BA1', rgb: { r: 49, g: 91, b: 161 } },
  {
    name: 'Azure Radiance',
    hex: '#007FFF',
    rgb: { r: 0, g: 127, b: 255 }
  },
  {
    name: 'Baby Blue',
    hex: '#E0FFFF',
    rgb: { r: 224, g: 255, b: 255 }
  },
  {
    name: 'Bahama Blue',
    hex: '#026395',
    rgb: { r: 2, g: 99, b: 149 }
  },
  { name: 'Bahia', hex: '#A5CB0C', rgb: { r: 165, g: 203, b: 12 } },
  {
    name: 'Baja White',
    hex: '#FFF8D1',
    rgb: { r: 255, g: 248, b: 209 }
  },
  {
    name: 'Bali Hai',
    hex: '#859FAF',
    rgb: { r: 133, g: 159, b: 175 }
  },
  {
    name: 'Baltic Sea',
    hex: '#2A2630',
    rgb: { r: 42, g: 38, b: 48 }
  },
  { name: 'Bamboo', hex: '#DA6304', rgb: { r: 218, g: 99, b: 4 } },
  {
    name: 'Banana Mania',
    hex: '#FBE7B2',
    rgb: { r: 251, g: 231, b: 178 }
  },
  {
    name: 'Bandicoot',
    hex: '#858470',
    rgb: { r: 133, g: 132, b: 112 }
  },
  {
    name: 'Barberry',
    hex: '#DED717',
    rgb: { r: 222, g: 215, b: 23 }
  },
  {
    name: 'Barley Corn',
    hex: '#A68B5B',
    rgb: { r: 166, g: 139, b: 91 }
  },
  {
    name: 'Barley White',
    hex: '#FFF4CE',
    rgb: { r: 255, g: 244, b: 206 }
  },
  { name: 'Barossa', hex: '#44012D', rgb: { r: 68, g: 1, b: 45 } },
  {
    name: 'Bastille',
    hex: '#292130',
    rgb: { r: 41, g: 33, b: 48 }
  },
  {
    name: 'Battleship Gray',
    hex: '#828F72',
    rgb: { r: 130, g: 143, b: 114 }
  },
  {
    name: 'Bay Leaf',
    hex: '#7DA98D',
    rgb: { r: 125, g: 169, b: 141 }
  },
  {
    name: 'Bay Of Many',
    hex: '#273A81',
    rgb: { r: 39, g: 58, b: 129 }
  },
  {
    name: 'Bazaar',
    hex: '#98777B',
    rgb: { r: 152, g: 119, b: 123 }
  },
  { name: 'Bean  ', hex: '#3D0C02', rgb: { r: 61, g: 12, b: 2 } },
  {
    name: 'Beauty Bush',
    hex: '#EEC1BE',
    rgb: { r: 238, g: 193, b: 190 }
  },
  {
    name: 'Beaver',
    hex: '#926F5B',
    rgb: { r: 146, g: 111, b: 91 }
  },
  {
    name: 'Beeswax',
    hex: '#FEF2C7',
    rgb: { r: 254, g: 242, b: 199 }
  },
  {
    name: 'Beige',
    hex: '#F5F5DC',
    rgb: { r: 245, g: 245, b: 220 }
  },
  {
    name: 'Bermuda',
    hex: '#7DD8C6',
    rgb: { r: 125, g: 216, b: 198 }
  },
  {
    name: 'Bermuda Gray',
    hex: '#6B8BA2',
    rgb: { r: 107, g: 139, b: 162 }
  },
  {
    name: 'Beryl Green',
    hex: '#DEE5C0',
    rgb: { r: 222, g: 229, b: 192 }
  },
  {
    name: 'Bianca',
    hex: '#FCFBF3',
    rgb: { r: 252, g: 251, b: 243 }
  },
  {
    name: 'Big Stone',
    hex: '#162A40',
    rgb: { r: 22, g: 42, b: 64 }
  },
  { name: 'Bilbao', hex: '#327C14', rgb: { r: 50, g: 124, b: 20 } },
  {
    name: 'Biloba Flower',
    hex: '#B2A1EA',
    rgb: { r: 178, g: 161, b: 234 }
  },
  { name: 'Birch', hex: '#373021', rgb: { r: 55, g: 48, b: 33 } },
  {
    name: 'Bird Flower',
    hex: '#D4CD16',
    rgb: { r: 212, g: 205, b: 22 }
  },
  { name: 'Biscay', hex: '#1B3162', rgb: { r: 27, g: 49, b: 98 } },
  {
    name: 'Bismark',
    hex: '#497183',
    rgb: { r: 73, g: 113, b: 131 }
  },
  {
    name: 'Bison Hide',
    hex: '#C1B7A4',
    rgb: { r: 193, g: 183, b: 164 }
  },
  { name: 'Bistre', hex: '#3D2B1F', rgb: { r: 61, g: 43, b: 31 } },
  {
    name: 'Bitter',
    hex: '#868974',
    rgb: { r: 134, g: 137, b: 116 }
  },
  {
    name: 'Bitter Lemon',
    hex: '#CAE00D',
    rgb: { r: 202, g: 224, b: 13 }
  },
  {
    name: 'Bittersweet',
    hex: '#FE6F5E',
    rgb: { r: 254, g: 111, b: 94 }
  },
  {
    name: 'Bizarre',
    hex: '#EEDEDA',
    rgb: { r: 238, g: 222, b: 218 }
  },
  { name: 'Black', hex: '#000000', rgb: { r: 0, g: 0, b: 0 } },
  {
    name: 'Black Bean',
    hex: '#081910',
    rgb: { r: 8, g: 25, b: 16 }
  },
  {
    name: 'Black Forest',
    hex: '#0B1304',
    rgb: { r: 11, g: 19, b: 4 }
  },
  {
    name: 'Black Haze',
    hex: '#F6F7F7',
    rgb: { r: 246, g: 247, b: 247 }
  },
  {
    name: 'Black Marlin',
    hex: '#3E2C1C',
    rgb: { r: 62, g: 44, b: 28 }
  },
  {
    name: 'Black Olive',
    hex: '#242E16',
    rgb: { r: 36, g: 46, b: 22 }
  },
  {
    name: 'Black Pearl',
    hex: '#041322',
    rgb: { r: 4, g: 19, b: 34 }
  },
  {
    name: 'Black Rock',
    hex: '#0D0332',
    rgb: { r: 13, g: 3, b: 50 }
  },
  {
    name: 'Black Rose',
    hex: '#67032D',
    rgb: { r: 103, g: 3, b: 45 }
  },
  {
    name: 'Black Russian',
    hex: '#0A001C',
    rgb: { r: 10, g: 0, b: 28 }
  },
  {
    name: 'Black Squeeze',
    hex: '#F2FAFA',
    rgb: { r: 242, g: 250, b: 250 }
  },
  {
    name: 'Black White',
    hex: '#FFFEF6',
    rgb: { r: 255, g: 254, b: 246 }
  },
  {
    name: 'Blackberry',
    hex: '#4D0135',
    rgb: { r: 77, g: 1, b: 53 }
  },
  {
    name: 'Blackcurrant',
    hex: '#32293A',
    rgb: { r: 50, g: 41, b: 58 }
  },
  {
    name: 'Blaze Orange',
    hex: '#FF6600',
    rgb: { r: 255, g: 102, b: 0 }
  },
  {
    name: 'Bleach White',
    hex: '#FEF3D8',
    rgb: { r: 254, g: 243, b: 216 }
  },
  {
    name: 'Bleached Cedar',
    hex: '#2C2133',
    rgb: { r: 44, g: 33, b: 51 }
  },
  {
    name: 'Blizzard Blue',
    hex: '#A3E3ED',
    rgb: { r: 163, g: 227, b: 237 }
  },
  {
    name: 'Blossom',
    hex: '#DCB4BC',
    rgb: { r: 220, g: 180, b: 188 }
  },
  { name: 'Blue', hex: '#0000FF', rgb: { r: 0, g: 0, b: 255 } },
  {
    name: 'Blue Bayoux',
    hex: '#496679',
    rgb: { r: 73, g: 102, b: 121 }
  },
  {
    name: 'Blue Bell',
    hex: '#9999CC',
    rgb: { r: 153, g: 153, b: 204 }
  },
  {
    name: 'Blue Chalk',
    hex: '#F1E9FF',
    rgb: { r: 241, g: 233, b: 255 }
  },
  {
    name: 'Blue Charcoal',
    hex: '#010D1A',
    rgb: { r: 1, g: 13, b: 26 }
  },
  {
    name: 'Blue Chill',
    hex: '#0C8990',
    rgb: { r: 12, g: 137, b: 144 }
  },
  {
    name: 'Blue Diamond',
    hex: '#380474',
    rgb: { r: 56, g: 4, b: 116 }
  },
  {
    name: 'Blue Dianne',
    hex: '#204852',
    rgb: { r: 32, g: 72, b: 82 }
  },
  {
    name: 'Blue Gem',
    hex: '#2C0E8C',
    rgb: { r: 44, g: 14, b: 140 }
  },
  {
    name: 'Blue Haze',
    hex: '#BFBED8',
    rgb: { r: 191, g: 190, b: 216 }
  },
  {
    name: 'Blue Lagoon',
    hex: '#017987',
    rgb: { r: 1, g: 121, b: 135 }
  },
  {
    name: 'Blue Marguerite',
    hex: '#7666C6',
    rgb: { r: 118, g: 102, b: 198 }
  },
  {
    name: 'Blue Ribbon',
    hex: '#0066FF',
    rgb: { r: 0, g: 102, b: 255 }
  },
  {
    name: 'Blue Romance',
    hex: '#D2F6DE',
    rgb: { r: 210, g: 246, b: 222 }
  },
  {
    name: 'Blue Smoke',
    hex: '#748881',
    rgb: { r: 116, g: 136, b: 129 }
  },
  {
    name: 'Blue Stone',
    hex: '#016162',
    rgb: { r: 1, g: 97, b: 98 }
  },
  {
    name: 'Blue Violet',
    hex: '#6456B7',
    rgb: { r: 100, g: 86, b: 183 }
  },
  {
    name: 'Blue Whale',
    hex: '#042E4C',
    rgb: { r: 4, g: 46, b: 76 }
  },
  {
    name: 'Blue Zodiac',
    hex: '#13264D',
    rgb: { r: 19, g: 38, b: 77 }
  },
  {
    name: 'Blumine',
    hex: '#18587A',
    rgb: { r: 24, g: 88, b: 122 }
  },
  { name: 'Blush', hex: '#B44668', rgb: { r: 180, g: 70, b: 104 } },
  {
    name: 'Blush Pink',
    hex: '#FF6FFF',
    rgb: { r: 255, g: 111, b: 255 }
  },
  {
    name: 'Bombay',
    hex: '#AFB1B8',
    rgb: { r: 175, g: 177, b: 184 }
  },
  {
    name: 'Bon Jour',
    hex: '#E5E0E1',
    rgb: { r: 229, g: 224, b: 225 }
  },
  {
    name: 'Bondi Blue',
    hex: '#0095B6',
    rgb: { r: 0, g: 149, b: 182 }
  },
  { name: 'Bone', hex: '#E4D1C0', rgb: { r: 228, g: 209, b: 192 } },
  { name: 'Bordeaux', hex: '#5C0120', rgb: { r: 92, g: 1, b: 32 } },
  {
    name: 'Bossanova',
    hex: '#4E2A5A',
    rgb: { r: 78, g: 42, b: 90 }
  },
  {
    name: 'Boston Blue',
    hex: '#3B91B4',
    rgb: { r: 59, g: 145, b: 180 }
  },
  {
    name: 'Botticelli',
    hex: '#C7DDE5',
    rgb: { r: 199, g: 221, b: 229 }
  },
  {
    name: 'Bottle Green',
    hex: '#093624',
    rgb: { r: 9, g: 54, b: 36 }
  },
  {
    name: 'Boulder',
    hex: '#7A7A7A',
    rgb: { r: 122, g: 122, b: 122 }
  },
  {
    name: 'Bouquet',
    hex: '#AE809E',
    rgb: { r: 174, g: 128, b: 158 }
  },
  {
    name: 'Bourbon',
    hex: '#BA6F1E',
    rgb: { r: 186, g: 111, b: 30 }
  },
  { name: 'Bracken', hex: '#4A2A04', rgb: { r: 74, g: 42, b: 4 } },
  {
    name: 'Brandy',
    hex: '#DEC196',
    rgb: { r: 222, g: 193, b: 150 }
  },
  {
    name: 'Brandy Punch',
    hex: '#CD8429',
    rgb: { r: 205, g: 132, b: 41 }
  },
  {
    name: 'Brandy Rose',
    hex: '#BB8983',
    rgb: { r: 187, g: 137, b: 131 }
  },
  {
    name: 'Breaker Bay',
    hex: '#5DA19F',
    rgb: { r: 93, g: 161, b: 159 }
  },
  {
    name: 'Brick Red',
    hex: '#C62D42',
    rgb: { r: 198, g: 45, b: 66 }
  },
  {
    name: 'Bridal Heath',
    hex: '#FFFAF4',
    rgb: { r: 255, g: 250, b: 244 }
  },
  {
    name: 'Bridesmaid',
    hex: '#FEF0EC',
    rgb: { r: 254, g: 240, b: 236 }
  },
  {
    name: 'Bright Gray',
    hex: '#3C4151',
    rgb: { r: 60, g: 65, b: 81 }
  },
  {
    name: 'Bright Green',
    hex: '#66FF00',
    rgb: { r: 102, g: 255, b: 0 }
  },
  {
    name: 'Bright Red',
    hex: '#B10000',
    rgb: { r: 177, g: 0, b: 0 }
  },
  {
    name: 'Bright Sun',
    hex: '#FED33C',
    rgb: { r: 254, g: 211, b: 60 }
  },
  {
    name: 'Bright Turquoise',
    hex: '#08E8DE',
    rgb: { r: 8, g: 232, b: 222 }
  },
  {
    name: 'Brilliant Rose',
    hex: '#F653A6',
    rgb: { r: 246, g: 83, b: 166 }
  },
  {
    name: 'Brink Pink',
    hex: '#FB607F',
    rgb: { r: 251, g: 96, b: 127 }
  },
  {
    name: 'Bronco',
    hex: '#ABA196',
    rgb: { r: 171, g: 161, b: 150 }
  },
  { name: 'Bronze', hex: '#3F2109', rgb: { r: 63, g: 33, b: 9 } },
  {
    name: 'Bronze Olive',
    hex: '#4E420C',
    rgb: { r: 78, g: 66, b: 12 }
  },
  {
    name: 'Bronzetone',
    hex: '#4D400F',
    rgb: { r: 77, g: 64, b: 15 }
  },
  { name: 'Broom', hex: '#FFEC13', rgb: { r: 255, g: 236, b: 19 } },
  { name: 'Brown', hex: '#964B00', rgb: { r: 150, g: 75, b: 0 } },
  {
    name: 'Brown Bramble',
    hex: '#592804',
    rgb: { r: 89, g: 40, b: 4 }
  },
  {
    name: 'Brown Derby',
    hex: '#492615',
    rgb: { r: 73, g: 38, b: 21 }
  },
  {
    name: 'Brown Pod',
    hex: '#401801',
    rgb: { r: 64, g: 24, b: 1 }
  },
  {
    name: 'Brown Rust',
    hex: '#AF593E',
    rgb: { r: 175, g: 89, b: 62 }
  },
  {
    name: 'Brown Tumbleweed',
    hex: '#37290E',
    rgb: { r: 55, g: 41, b: 14 }
  },
  {
    name: 'Bubbles',
    hex: '#E7FEFF',
    rgb: { r: 231, g: 254, b: 255 }
  },
  {
    name: 'Buccaneer',
    hex: '#622F30',
    rgb: { r: 98, g: 47, b: 48 }
  },
  { name: 'Bud', hex: '#A8AE9C', rgb: { r: 168, g: 174, b: 156 } },
  {
    name: 'Buddha Gold',
    hex: '#C1A004',
    rgb: { r: 193, g: 160, b: 4 }
  },
  { name: 'Buff', hex: '#F0DC82', rgb: { r: 240, g: 220, b: 130 } },
  {
    name: 'Bulgarian Rose',
    hex: '#480607',
    rgb: { r: 72, g: 6, b: 7 }
  },
  {
    name: 'Bull Shot',
    hex: '#864D1E',
    rgb: { r: 134, g: 77, b: 30 }
  },
  { name: 'Bunker', hex: '#0D1117', rgb: { r: 13, g: 17, b: 23 } },
  { name: 'Bunting', hex: '#151F4C', rgb: { r: 21, g: 31, b: 76 } },
  {
    name: 'Burgundy',
    hex: '#900020',
    rgb: { r: 144, g: 0, b: 32 }
  },
  { name: 'Burnham', hex: '#002E20', rgb: { r: 0, g: 46, b: 32 } },
  {
    name: 'Burning Orange',
    hex: '#FF7034',
    rgb: { r: 255, g: 112, b: 52 }
  },
  {
    name: 'Burning Sand',
    hex: '#D99376',
    rgb: { r: 217, g: 147, b: 118 }
  },
  {
    name: 'Burnt Maroon',
    hex: '#420303',
    rgb: { r: 66, g: 3, b: 3 }
  },
  {
    name: 'Burnt Orange',
    hex: '#CC5500',
    rgb: { r: 204, g: 85, b: 0 }
  },
  {
    name: 'Burnt Sienna',
    hex: '#E97451',
    rgb: { r: 233, g: 116, b: 81 }
  },
  {
    name: 'Burnt Umber',
    hex: '#8A3324',
    rgb: { r: 138, g: 51, b: 36 }
  },
  { name: 'Bush', hex: '#0D2E1C', rgb: { r: 13, g: 46, b: 28 } },
  {
    name: 'Buttercup',
    hex: '#F3AD16',
    rgb: { r: 243, g: 173, b: 22 }
  },
  {
    name: 'Buttered Rum',
    hex: '#A1750D',
    rgb: { r: 161, g: 117, b: 13 }
  },
  {
    name: 'Butterfly Bush',
    hex: '#624E9A',
    rgb: { r: 98, g: 78, b: 154 }
  },
  {
    name: 'Buttermilk',
    hex: '#FFF1B5',
    rgb: { r: 255, g: 241, b: 181 }
  },
  {
    name: 'Buttery White',
    hex: '#FFFCEA',
    rgb: { r: 255, g: 252, b: 234 }
  },
  { name: 'Cab Sav', hex: '#4D0A18', rgb: { r: 77, g: 10, b: 24 } },
  {
    name: 'Cabaret',
    hex: '#D94972',
    rgb: { r: 217, g: 73, b: 114 }
  },
  {
    name: 'Cabbage Pont',
    hex: '#3F4C3A',
    rgb: { r: 63, g: 76, b: 58 }
  },
  { name: 'Cactus', hex: '#587156', rgb: { r: 88, g: 113, b: 86 } },
  {
    name: 'Cadet Blue',
    hex: '#A9B2C3',
    rgb: { r: 169, g: 178, b: 195 }
  },
  {
    name: 'Cadillac',
    hex: '#B04C6A',
    rgb: { r: 176, g: 76, b: 106 }
  },
  {
    name: 'Cafe Royale',
    hex: '#6F440C',
    rgb: { r: 111, g: 68, b: 12 }
  },
  {
    name: 'Calico',
    hex: '#E0C095',
    rgb: { r: 224, g: 192, b: 149 }
  },
  {
    name: 'California',
    hex: '#FE9D04',
    rgb: { r: 254, g: 157, b: 4 }
  },
  {
    name: 'Calypso',
    hex: '#31728D',
    rgb: { r: 49, g: 114, b: 141 }
  },
  { name: 'Camarone', hex: '#00581A', rgb: { r: 0, g: 88, b: 26 } },
  {
    name: 'Camelot',
    hex: '#893456',
    rgb: { r: 137, g: 52, b: 86 }
  },
  {
    name: 'Cameo',
    hex: '#D9B99B',
    rgb: { r: 217, g: 185, b: 155 }
  },
  {
    name: 'Camouflage',
    hex: '#3C3910',
    rgb: { r: 60, g: 57, b: 16 }
  },
  {
    name: 'Camouflage Green',
    hex: '#78866B',
    rgb: { r: 120, g: 134, b: 107 }
  },
  {
    name: 'Can Can',
    hex: '#D591A4',
    rgb: { r: 213, g: 145, b: 164 }
  },
  {
    name: 'Canary',
    hex: '#F3FB62',
    rgb: { r: 243, g: 251, b: 98 }
  },
  {
    name: 'Candlelight',
    hex: '#FCD917',
    rgb: { r: 252, g: 217, b: 23 }
  },
  {
    name: 'Candy Corn',
    hex: '#FBEC5D',
    rgb: { r: 251, g: 236, b: 93 }
  },
  {
    name: 'Cannon Black',
    hex: '#251706',
    rgb: { r: 37, g: 23, b: 6 }
  },
  {
    name: 'Cannon Pink',
    hex: '#894367',
    rgb: { r: 137, g: 67, b: 103 }
  },
  {
    name: 'Cape Cod',
    hex: '#3C4443',
    rgb: { r: 60, g: 68, b: 67 }
  },
  {
    name: 'Cape Honey',
    hex: '#FEE5AC',
    rgb: { r: 254, g: 229, b: 172 }
  },
  {
    name: 'Cape Palliser',
    hex: '#A26645',
    rgb: { r: 162, g: 102, b: 69 }
  },
  {
    name: 'Caper',
    hex: '#DCEDB4',
    rgb: { r: 220, g: 237, b: 180 }
  },
  {
    name: 'Caramel',
    hex: '#FFDDAF',
    rgb: { r: 255, g: 221, b: 175 }
  },
  {
    name: 'Cararra',
    hex: '#EEEEE8',
    rgb: { r: 238, g: 238, b: 232 }
  },
  {
    name: 'Cardin Green',
    hex: '#01361C',
    rgb: { r: 1, g: 54, b: 28 }
  },
  {
    name: 'Cardinal',
    hex: '#C41E3A',
    rgb: { r: 196, g: 30, b: 58 }
  },
  {
    name: 'Cardinal Pink',
    hex: '#8C055E',
    rgb: { r: 140, g: 5, b: 94 }
  },
  {
    name: 'Careys Pink',
    hex: '#D29EAA',
    rgb: { r: 210, g: 158, b: 170 }
  },
  {
    name: 'Caribbean Green',
    hex: '#00CC99',
    rgb: { r: 0, g: 204, b: 153 }
  },
  {
    name: 'Carissma',
    hex: '#EA88A8',
    rgb: { r: 234, g: 136, b: 168 }
  },
  {
    name: 'Carla',
    hex: '#F3FFD8',
    rgb: { r: 243, g: 255, b: 216 }
  },
  { name: 'Carmine', hex: '#960018', rgb: { r: 150, g: 0, b: 24 } },
  {
    name: 'Carnaby Tan',
    hex: '#5C2E01',
    rgb: { r: 92, g: 46, b: 1 }
  },
  {
    name: 'Carnation',
    hex: '#F95A61',
    rgb: { r: 249, g: 90, b: 97 }
  },
  {
    name: 'Carnation Pink',
    hex: '#FFA6C9',
    rgb: { r: 255, g: 166, b: 201 }
  },
  {
    name: 'Carousel Pink',
    hex: '#F9E0ED',
    rgb: { r: 249, g: 224, b: 237 }
  },
  {
    name: 'Carrot Orange',
    hex: '#ED9121',
    rgb: { r: 237, g: 145, b: 33 }
  },
  {
    name: 'Casablanca',
    hex: '#F8B853',
    rgb: { r: 248, g: 184, b: 83 }
  },
  { name: 'Casal', hex: '#2F6168', rgb: { r: 47, g: 97, b: 104 } },
  {
    name: 'Cascade',
    hex: '#8BA9A5',
    rgb: { r: 139, g: 169, b: 165 }
  },
  {
    name: 'Cashmere',
    hex: '#E6BEA5',
    rgb: { r: 230, g: 190, b: 165 }
  },
  {
    name: 'Casper',
    hex: '#ADBED1',
    rgb: { r: 173, g: 190, b: 209 }
  },
  { name: 'Castro', hex: '#52001F', rgb: { r: 82, g: 0, b: 31 } },
  {
    name: 'Catalina Blue',
    hex: '#062A78',
    rgb: { r: 6, g: 42, b: 120 }
  },
  {
    name: 'Catskill White',
    hex: '#EEF6F7',
    rgb: { r: 238, g: 246, b: 247 }
  },
  {
    name: 'Cavern Pink',
    hex: '#E3BEBE',
    rgb: { r: 227, g: 190, b: 190 }
  },
  { name: 'Cedar', hex: '#3E1C14', rgb: { r: 62, g: 28, b: 20 } },
  {
    name: 'Cedar Wood Finish',
    hex: '#711A00',
    rgb: { r: 113, g: 26, b: 0 }
  },
  {
    name: 'Celadon',
    hex: '#ACE1AF',
    rgb: { r: 172, g: 225, b: 175 }
  },
  {
    name: 'Celery',
    hex: '#B8C25D',
    rgb: { r: 184, g: 194, b: 93 }
  },
  {
    name: 'Celeste',
    hex: '#D1D2CA',
    rgb: { r: 209, g: 210, b: 202 }
  },
  { name: 'Cello', hex: '#1E385B', rgb: { r: 30, g: 56, b: 91 } },
  { name: 'Celtic', hex: '#163222', rgb: { r: 22, g: 50, b: 34 } },
  {
    name: 'Cement',
    hex: '#8D7662',
    rgb: { r: 141, g: 118, b: 98 }
  },
  {
    name: 'Ceramic',
    hex: '#FCFFF9',
    rgb: { r: 252, g: 255, b: 249 }
  },
  {
    name: 'Cerise',
    hex: '#DA3287',
    rgb: { r: 218, g: 50, b: 135 }
  },
  {
    name: 'Cerise Red',
    hex: '#DE3163',
    rgb: { r: 222, g: 49, b: 99 }
  },
  {
    name: 'Cerulean',
    hex: '#02A4D3',
    rgb: { r: 2, g: 164, b: 211 }
  },
  {
    name: 'Cerulean Blue',
    hex: '#2A52BE',
    rgb: { r: 42, g: 82, b: 190 }
  },
  {
    name: 'Chablis',
    hex: '#FFF4F3',
    rgb: { r: 255, g: 244, b: 243 }
  },
  {
    name: 'Chalet Green',
    hex: '#516E3D',
    rgb: { r: 81, g: 110, b: 61 }
  },
  {
    name: 'Chalky',
    hex: '#EED794',
    rgb: { r: 238, g: 215, b: 148 }
  },
  {
    name: 'Chambray',
    hex: '#354E8C',
    rgb: { r: 53, g: 78, b: 140 }
  },
  {
    name: 'Chamois',
    hex: '#EDDCB1',
    rgb: { r: 237, g: 220, b: 177 }
  },
  {
    name: 'Champagne',
    hex: '#FAECCC',
    rgb: { r: 250, g: 236, b: 204 }
  },
  {
    name: 'Chantilly',
    hex: '#F8C3DF',
    rgb: { r: 248, g: 195, b: 223 }
  },
  { name: 'Charade', hex: '#292937', rgb: { r: 41, g: 41, b: 55 } },
  {
    name: 'Chardon',
    hex: '#FFF3F1',
    rgb: { r: 255, g: 243, b: 241 }
  },
  {
    name: 'Chardonnay',
    hex: '#FFCD8C',
    rgb: { r: 255, g: 205, b: 140 }
  },
  {
    name: 'Charlotte',
    hex: '#BAEEF9',
    rgb: { r: 186, g: 238, b: 249 }
  },
  {
    name: 'Charm',
    hex: '#D47494',
    rgb: { r: 212, g: 116, b: 148 }
  },
  {
    name: 'Chartreuse',
    hex: '#7FFF00',
    rgb: { r: 127, g: 255, b: 0 }
  },
  {
    name: 'Chartreuse Yellow',
    hex: '#DFFF00',
    rgb: { r: 223, g: 255, b: 0 }
  },
  {
    name: 'Chateau Green',
    hex: '#40A860',
    rgb: { r: 64, g: 168, b: 96 }
  },
  {
    name: 'Chatelle',
    hex: '#BDB3C7',
    rgb: { r: 189, g: 179, b: 199 }
  },
  {
    name: 'Chathams Blue',
    hex: '#175579',
    rgb: { r: 23, g: 85, b: 121 }
  },
  {
    name: 'Chelsea Cucumber',
    hex: '#83AA5D',
    rgb: { r: 131, g: 170, b: 93 }
  },
  {
    name: 'Chelsea Gem',
    hex: '#9E5302',
    rgb: { r: 158, g: 83, b: 2 }
  },
  {
    name: 'Chenin',
    hex: '#DFCD6F',
    rgb: { r: 223, g: 205, b: 111 }
  },
  {
    name: 'Cherokee',
    hex: '#FCDA98',
    rgb: { r: 252, g: 218, b: 152 }
  },
  {
    name: 'Cherry Pie',
    hex: '#2A0359',
    rgb: { r: 42, g: 3, b: 89 }
  },
  {
    name: 'Cherrywood',
    hex: '#651A14',
    rgb: { r: 101, g: 26, b: 20 }
  },
  {
    name: 'Cherub',
    hex: '#F8D9E9',
    rgb: { r: 248, g: 217, b: 233 }
  },
  {
    name: 'Chestnut',
    hex: '#B94E48',
    rgb: { r: 185, g: 78, b: 72 }
  },
  {
    name: 'Chestnut Rose',
    hex: '#CD5C5C',
    rgb: { r: 205, g: 92, b: 92 }
  },
  {
    name: 'Chetwode Blue',
    hex: '#8581D9',
    rgb: { r: 133, g: 129, b: 217 }
  },
  { name: 'Chicago', hex: '#5D5C58', rgb: { r: 93, g: 92, b: 88 } },
  {
    name: 'Chiffon',
    hex: '#F1FFC8',
    rgb: { r: 241, g: 255, b: 200 }
  },
  {
    name: 'Chilean Fire',
    hex: '#F77703',
    rgb: { r: 247, g: 119, b: 3 }
  },
  {
    name: 'Chilean Heath',
    hex: '#FFFDE6',
    rgb: { r: 255, g: 253, b: 230 }
  },
  {
    name: 'China Ivory',
    hex: '#FCFFE7',
    rgb: { r: 252, g: 255, b: 231 }
  },
  {
    name: 'Chino',
    hex: '#CEC7A7',
    rgb: { r: 206, g: 199, b: 167 }
  },
  {
    name: 'Chinook',
    hex: '#A8E3BD',
    rgb: { r: 168, g: 227, b: 189 }
  },
  { name: 'Chocolate', hex: '#370202', rgb: { r: 55, g: 2, b: 2 } },
  {
    name: 'Christalle',
    hex: '#33036B',
    rgb: { r: 51, g: 3, b: 107 }
  },
  {
    name: 'Christi',
    hex: '#67A712',
    rgb: { r: 103, g: 167, b: 18 }
  },
  {
    name: 'Christine',
    hex: '#E7730A',
    rgb: { r: 231, g: 115, b: 10 }
  },
  {
    name: 'Chrome White',
    hex: '#E8F1D4',
    rgb: { r: 232, g: 241, b: 212 }
  },
  { name: 'Cinder', hex: '#0E0E18', rgb: { r: 14, g: 14, b: 24 } },
  {
    name: 'Cinderella',
    hex: '#FDE1DC',
    rgb: { r: 253, g: 225, b: 220 }
  },
  {
    name: 'Cinnabar',
    hex: '#E34234',
    rgb: { r: 227, g: 66, b: 52 }
  },
  {
    name: 'Cinnamon',
    hex: '#7B3F00',
    rgb: { r: 123, g: 63, b: 0 }
  },
  {
    name: 'Cioccolato',
    hex: '#55280C',
    rgb: { r: 85, g: 40, b: 12 }
  },
  {
    name: 'Citrine White',
    hex: '#FAF7D6',
    rgb: { r: 250, g: 247, b: 214 }
  },
  {
    name: 'Citron',
    hex: '#9EA91F',
    rgb: { r: 158, g: 169, b: 31 }
  },
  {
    name: 'Citrus',
    hex: '#A1C50A',
    rgb: { r: 161, g: 197, b: 10 }
  },
  {
    name: 'Clairvoyant',
    hex: '#480656',
    rgb: { r: 72, g: 6, b: 86 }
  },
  {
    name: 'Clam Shell',
    hex: '#D4B6AF',
    rgb: { r: 212, g: 182, b: 175 }
  },
  { name: 'Claret', hex: '#7F1734', rgb: { r: 127, g: 23, b: 52 } },
  {
    name: 'Classic Rose',
    hex: '#FBCCE7',
    rgb: { r: 251, g: 204, b: 231 }
  },
  {
    name: 'Clay Ash',
    hex: '#BDC8B3',
    rgb: { r: 189, g: 200, b: 179 }
  },
  {
    name: 'Clay Creek',
    hex: '#8A8360',
    rgb: { r: 138, g: 131, b: 96 }
  },
  {
    name: 'Clear Day',
    hex: '#E9FFFD',
    rgb: { r: 233, g: 255, b: 253 }
  },
  {
    name: 'Clementine',
    hex: '#E96E00',
    rgb: { r: 233, g: 110, b: 0 }
  },
  { name: 'Clinker', hex: '#371D09', rgb: { r: 55, g: 29, b: 9 } },
  {
    name: 'Cloud',
    hex: '#C7C4BF',
    rgb: { r: 199, g: 196, b: 191 }
  },
  {
    name: 'Cloud Burst',
    hex: '#202E54',
    rgb: { r: 32, g: 46, b: 84 }
  },
  {
    name: 'Cloudy',
    hex: '#ACA59F',
    rgb: { r: 172, g: 165, b: 159 }
  },
  { name: 'Clover', hex: '#384910', rgb: { r: 56, g: 73, b: 16 } },
  { name: 'Cobalt', hex: '#0047AB', rgb: { r: 0, g: 71, b: 171 } },
  {
    name: 'Cocoa Bean',
    hex: '#481C1C',
    rgb: { r: 72, g: 28, b: 28 }
  },
  {
    name: 'Cocoa Brown',
    hex: '#301F1E',
    rgb: { r: 48, g: 31, b: 30 }
  },
  {
    name: 'Coconut Cream',
    hex: '#F8F7DC',
    rgb: { r: 248, g: 247, b: 220 }
  },
  {
    name: 'Cod Gray',
    hex: '#0B0B0B',
    rgb: { r: 11, g: 11, b: 11 }
  },
  {
    name: 'Coffee',
    hex: '#706555',
    rgb: { r: 112, g: 101, b: 85 }
  },
  {
    name: 'Coffee Bean',
    hex: '#2A140E',
    rgb: { r: 42, g: 20, b: 14 }
  },
  { name: 'Cognac', hex: '#9F381D', rgb: { r: 159, g: 56, b: 29 } },
  { name: 'Cola', hex: '#3F2500', rgb: { r: 63, g: 37, b: 0 } },
  {
    name: 'Cold Purple',
    hex: '#ABA0D9',
    rgb: { r: 171, g: 160, b: 217 }
  },
  {
    name: 'Cold Turkey',
    hex: '#CEBABA',
    rgb: { r: 206, g: 186, b: 186 }
  },
  {
    name: 'Colonial White',
    hex: '#FFEDBC',
    rgb: { r: 255, g: 237, b: 188 }
  },
  { name: 'Comet', hex: '#5C5D75', rgb: { r: 92, g: 93, b: 117 } },
  { name: 'Como', hex: '#517C66', rgb: { r: 81, g: 124, b: 102 } },
  {
    name: 'Conch',
    hex: '#C9D9D2',
    rgb: { r: 201, g: 217, b: 210 }
  },
  {
    name: 'Concord',
    hex: '#7C7B7A',
    rgb: { r: 124, g: 123, b: 122 }
  },
  {
    name: 'Concrete',
    hex: '#F2F2F2',
    rgb: { r: 242, g: 242, b: 242 }
  },
  {
    name: 'Confetti',
    hex: '#E9D75A',
    rgb: { r: 233, g: 215, b: 90 }
  },
  {
    name: 'Congo Brown',
    hex: '#593737',
    rgb: { r: 89, g: 55, b: 55 }
  },
  {
    name: 'Congress Blue',
    hex: '#02478E',
    rgb: { r: 2, g: 71, b: 142 }
  },
  {
    name: 'Conifer',
    hex: '#ACDD4D',
    rgb: { r: 172, g: 221, b: 77 }
  },
  {
    name: 'Contessa',
    hex: '#C6726B',
    rgb: { r: 198, g: 114, b: 107 }
  },
  {
    name: 'Copper',
    hex: '#B87333',
    rgb: { r: 184, g: 115, b: 51 }
  },
  {
    name: 'Copper Canyon',
    hex: '#7E3A15',
    rgb: { r: 126, g: 58, b: 21 }
  },
  {
    name: 'Copper Rose',
    hex: '#996666',
    rgb: { r: 153, g: 102, b: 102 }
  },
  {
    name: 'Copper Rust',
    hex: '#944747',
    rgb: { r: 148, g: 71, b: 71 }
  },
  {
    name: 'Copperfield',
    hex: '#DA8A67',
    rgb: { r: 218, g: 138, b: 103 }
  },
  { name: 'Coral', hex: '#FF7F50', rgb: { r: 255, g: 127, b: 80 } },
  {
    name: 'Coral Red',
    hex: '#FF4040',
    rgb: { r: 255, g: 64, b: 64 }
  },
  {
    name: 'Coral Reef',
    hex: '#C7BCA2',
    rgb: { r: 199, g: 188, b: 162 }
  },
  {
    name: 'Coral Tree',
    hex: '#A86B6B',
    rgb: { r: 168, g: 107, b: 107 }
  },
  {
    name: 'Corduroy',
    hex: '#606E68',
    rgb: { r: 96, g: 110, b: 104 }
  },
  {
    name: 'Coriander',
    hex: '#C4D0B0',
    rgb: { r: 196, g: 208, b: 176 }
  },
  { name: 'Cork', hex: '#40291D', rgb: { r: 64, g: 41, b: 29 } },
  { name: 'Corn', hex: '#E7BF05', rgb: { r: 231, g: 191, b: 5 } },
  {
    name: 'Corn Field',
    hex: '#F8FACD',
    rgb: { r: 248, g: 250, b: 205 }
  },
  {
    name: 'Corn Harvest',
    hex: '#8B6B0B',
    rgb: { r: 139, g: 107, b: 11 }
  },
  {
    name: 'Cornflower',
    hex: '#93CCEA',
    rgb: { r: 147, g: 204, b: 234 }
  },
  {
    name: 'Cornflower Blue',
    hex: '#6495ED',
    rgb: { r: 100, g: 149, b: 237 }
  },
  {
    name: 'Cornflower Lilac',
    hex: '#FFB0AC',
    rgb: { r: 255, g: 176, b: 172 }
  },
  {
    name: 'Corvette',
    hex: '#FAD3A2',
    rgb: { r: 250, g: 211, b: 162 }
  },
  { name: 'Cosmic', hex: '#76395D', rgb: { r: 118, g: 57, b: 93 } },
  {
    name: 'Cosmos',
    hex: '#FFD8D9',
    rgb: { r: 255, g: 216, b: 217 }
  },
  {
    name: 'Costa Del Sol',
    hex: '#615D30',
    rgb: { r: 97, g: 93, b: 48 }
  },
  {
    name: 'Cotton Candy',
    hex: '#FFB7D5',
    rgb: { r: 255, g: 183, b: 213 }
  },
  {
    name: 'Cotton Seed',
    hex: '#C2BDB6',
    rgb: { r: 194, g: 189, b: 182 }
  },
  {
    name: 'County Green',
    hex: '#01371A',
    rgb: { r: 1, g: 55, b: 26 }
  },
  { name: 'Cowboy', hex: '#4D282D', rgb: { r: 77, g: 40, b: 45 } },
  { name: 'Crail', hex: '#B95140', rgb: { r: 185, g: 81, b: 64 } },
  {
    name: 'Cranberry',
    hex: '#DB5079',
    rgb: { r: 219, g: 80, b: 121 }
  },
  {
    name: 'Crater Brown',
    hex: '#462425',
    rgb: { r: 70, g: 36, b: 37 }
  },
  {
    name: 'Cream',
    hex: '#FFFDD0',
    rgb: { r: 255, g: 253, b: 208 }
  },
  {
    name: 'Cream Brulee',
    hex: '#FFE5A0',
    rgb: { r: 255, g: 229, b: 160 }
  },
  {
    name: 'Cream Can',
    hex: '#F5C85C',
    rgb: { r: 245, g: 200, b: 92 }
  },
  { name: 'Creole', hex: '#1E0F04', rgb: { r: 30, g: 15, b: 4 } },
  { name: 'Crete', hex: '#737829', rgb: { r: 115, g: 120, b: 41 } },
  {
    name: 'Crimson',
    hex: '#DC143C',
    rgb: { r: 220, g: 20, b: 60 }
  },
  {
    name: 'Crocodile',
    hex: '#736D58',
    rgb: { r: 115, g: 109, b: 88 }
  },
  {
    name: 'Crown Of Thorns',
    hex: '#771F1F',
    rgb: { r: 119, g: 31, b: 31 }
  },
  {
    name: 'Crowshead',
    hex: '#1C1208',
    rgb: { r: 28, g: 18, b: 8 }
  },
  {
    name: 'Cruise',
    hex: '#B5ECDF',
    rgb: { r: 181, g: 236, b: 223 }
  },
  { name: 'Crusoe', hex: '#004816', rgb: { r: 0, g: 72, b: 22 } },
  {
    name: 'Crusta',
    hex: '#FD7B33',
    rgb: { r: 253, g: 123, b: 51 }
  },
  { name: 'Cumin', hex: '#924321', rgb: { r: 146, g: 67, b: 33 } },
  {
    name: 'Cumulus',
    hex: '#FDFFD5',
    rgb: { r: 253, g: 255, b: 213 }
  },
  {
    name: 'Cupid',
    hex: '#FBBEDA',
    rgb: { r: 251, g: 190, b: 218 }
  },
  {
    name: 'Curious Blue',
    hex: '#2596D1',
    rgb: { r: 37, g: 150, b: 209 }
  },
  {
    name: 'Cutty Sark',
    hex: '#507672',
    rgb: { r: 80, g: 118, b: 114 }
  },
  {
    name: 'Cyan / Aqua',
    hex: '#00FFFF',
    rgb: { r: 0, g: 255, b: 255 }
  },
  { name: 'Cyprus', hex: '#003E40', rgb: { r: 0, g: 62, b: 64 } },
  { name: 'Daintree', hex: '#012731', rgb: { r: 1, g: 39, b: 49 } },
  {
    name: 'Dairy Cream',
    hex: '#F9E4BC',
    rgb: { r: 249, g: 228, b: 188 }
  },
  {
    name: 'Daisy Bush',
    hex: '#4F2398',
    rgb: { r: 79, g: 35, b: 152 }
  },
  { name: 'Dallas', hex: '#6E4B26', rgb: { r: 110, g: 75, b: 38 } },
  {
    name: 'Dandelion',
    hex: '#FED85D',
    rgb: { r: 254, g: 216, b: 93 }
  },
  {
    name: 'Danube',
    hex: '#6093D1',
    rgb: { r: 96, g: 147, b: 209 }
  },
  {
    name: 'Dark Blue',
    hex: '#0000C8',
    rgb: { r: 0, g: 0, b: 200 }
  },
  {
    name: 'Dark Burgundy',
    hex: '#770F05',
    rgb: { r: 119, g: 15, b: 5 }
  },
  {
    name: 'Dark Ebony',
    hex: '#3C2005',
    rgb: { r: 60, g: 32, b: 5 }
  },
  {
    name: 'Dark Fern',
    hex: '#0A480D',
    rgb: { r: 10, g: 72, b: 13 }
  },
  {
    name: 'Dark Tan',
    hex: '#661010',
    rgb: { r: 102, g: 16, b: 16 }
  },
  { name: 'Dawn', hex: '#A6A29A', rgb: { r: 166, g: 162, b: 154 } },
  {
    name: 'Dawn Pink',
    hex: '#F3E9E5',
    rgb: { r: 243, g: 233, b: 229 }
  },
  {
    name: 'De York',
    hex: '#7AC488',
    rgb: { r: 122, g: 196, b: 136 }
  },
  { name: 'Deco', hex: '#D2DA97', rgb: { r: 210, g: 218, b: 151 } },
  {
    name: 'Deep Blue',
    hex: '#220878',
    rgb: { r: 34, g: 8, b: 120 }
  },
  {
    name: 'Deep Blush',
    hex: '#E47698',
    rgb: { r: 228, g: 118, b: 152 }
  },
  {
    name: 'Deep Bronze',
    hex: '#4A3004',
    rgb: { r: 74, g: 48, b: 4 }
  },
  {
    name: 'Deep Cerulean',
    hex: '#007BA7',
    rgb: { r: 0, g: 123, b: 167 }
  },
  {
    name: 'Deep Cove',
    hex: '#051040',
    rgb: { r: 5, g: 16, b: 64 }
  },
  { name: 'Deep Fir', hex: '#002900', rgb: { r: 0, g: 41, b: 0 } },
  {
    name: 'Deep Forest Green',
    hex: '#182D09',
    rgb: { r: 24, g: 45, b: 9 }
  },
  {
    name: 'Deep Koamaru',
    hex: '#1B127B',
    rgb: { r: 27, g: 18, b: 123 }
  },
  {
    name: 'Deep Oak',
    hex: '#412010',
    rgb: { r: 65, g: 32, b: 16 }
  },
  {
    name: 'Deep Sapphire',
    hex: '#082567',
    rgb: { r: 8, g: 37, b: 103 }
  },
  {
    name: 'Deep Sea',
    hex: '#01826B',
    rgb: { r: 1, g: 130, b: 107 }
  },
  {
    name: 'Deep Sea Green',
    hex: '#095859',
    rgb: { r: 9, g: 88, b: 89 }
  },
  {
    name: 'Deep Teal',
    hex: '#003532',
    rgb: { r: 0, g: 53, b: 50 }
  },
  {
    name: 'Del Rio',
    hex: '#B09A95',
    rgb: { r: 176, g: 154, b: 149 }
  },
  { name: 'Dell', hex: '#396413', rgb: { r: 57, g: 100, b: 19 } },
  {
    name: 'Delta',
    hex: '#A4A49D',
    rgb: { r: 164, g: 164, b: 157 }
  },
  {
    name: 'Deluge',
    hex: '#7563A8',
    rgb: { r: 117, g: 99, b: 168 }
  },
  { name: 'Denim', hex: '#1560BD', rgb: { r: 21, g: 96, b: 189 } },
  {
    name: 'Derby',
    hex: '#FFEED8',
    rgb: { r: 255, g: 238, b: 216 }
  },
  { name: 'Desert', hex: '#AE6020', rgb: { r: 174, g: 96, b: 32 } },
  {
    name: 'Desert Sand',
    hex: '#EDC9AF',
    rgb: { r: 237, g: 201, b: 175 }
  },
  {
    name: 'Desert Storm',
    hex: '#F8F8F7',
    rgb: { r: 248, g: 248, b: 247 }
  },
  { name: 'Dew', hex: '#EAFFFE', rgb: { r: 234, g: 255, b: 254 } },
  {
    name: 'Di Serria',
    hex: '#DB995E',
    rgb: { r: 219, g: 153, b: 94 }
  },
  { name: 'Diesel', hex: '#130000', rgb: { r: 19, g: 0, b: 0 } },
  {
    name: 'Dingley',
    hex: '#5D7747',
    rgb: { r: 93, g: 119, b: 71 }
  },
  { name: 'Disco', hex: '#871550', rgb: { r: 135, g: 21, b: 80 } },
  { name: 'Dixie', hex: '#E29418', rgb: { r: 226, g: 148, b: 24 } },
  {
    name: 'Dodger Blue',
    hex: '#1E90FF',
    rgb: { r: 30, g: 144, b: 255 }
  },
  {
    name: 'Dolly',
    hex: '#F9FF8B',
    rgb: { r: 249, g: 255, b: 139 }
  },
  {
    name: 'Dolphin',
    hex: '#646077',
    rgb: { r: 100, g: 96, b: 119 }
  },
  {
    name: 'Domino',
    hex: '#8E775E',
    rgb: { r: 142, g: 119, b: 94 }
  },
  {
    name: 'Don Juan',
    hex: '#5D4C51',
    rgb: { r: 93, g: 76, b: 81 }
  },
  {
    name: 'Donkey Brown',
    hex: '#A69279',
    rgb: { r: 166, g: 146, b: 121 }
  },
  { name: 'Dorado', hex: '#6B5755', rgb: { r: 107, g: 87, b: 85 } },
  {
    name: 'Double Colonial White',
    hex: '#EEE3AD',
    rgb: { r: 238, g: 227, b: 173 }
  },
  {
    name: 'Double Pearl Lusta',
    hex: '#FCF4D0',
    rgb: { r: 252, g: 244, b: 208 }
  },
  {
    name: 'Double Spanish White',
    hex: '#E6D7B9',
    rgb: { r: 230, g: 215, b: 185 }
  },
  {
    name: 'Dove Gray',
    hex: '#6D6C6C',
    rgb: { r: 109, g: 108, b: 108 }
  },
  {
    name: 'Downriver',
    hex: '#092256',
    rgb: { r: 9, g: 34, b: 86 }
  },
  {
    name: 'Downy',
    hex: '#6FD0C5',
    rgb: { r: 111, g: 208, b: 197 }
  },
  {
    name: 'Driftwood',
    hex: '#AF8751',
    rgb: { r: 175, g: 135, b: 81 }
  },
  {
    name: 'Drover',
    hex: '#FDF7AD',
    rgb: { r: 253, g: 247, b: 173 }
  },
  {
    name: 'Dull Lavender',
    hex: '#A899E6',
    rgb: { r: 168, g: 153, b: 230 }
  },
  { name: 'Dune', hex: '#383533', rgb: { r: 56, g: 53, b: 51 } },
  {
    name: 'Dust Storm',
    hex: '#E5CCC9',
    rgb: { r: 229, g: 204, b: 201 }
  },
  {
    name: 'Dusty Gray',
    hex: '#A8989B',
    rgb: { r: 168, g: 152, b: 155 }
  },
  {
    name: 'Eagle',
    hex: '#B6BAA4',
    rgb: { r: 182, g: 186, b: 164 }
  },
  {
    name: 'Earls Green',
    hex: '#C9B93B',
    rgb: { r: 201, g: 185, b: 59 }
  },
  {
    name: 'Early Dawn',
    hex: '#FFF9E6',
    rgb: { r: 255, g: 249, b: 230 }
  },
  {
    name: 'East Bay',
    hex: '#414C7D',
    rgb: { r: 65, g: 76, b: 125 }
  },
  {
    name: 'East Side',
    hex: '#AC91CE',
    rgb: { r: 172, g: 145, b: 206 }
  },
  {
    name: 'Eastern Blue',
    hex: '#1E9AB0',
    rgb: { r: 30, g: 154, b: 176 }
  },
  { name: 'Ebb', hex: '#E9E3E3', rgb: { r: 233, g: 227, b: 227 } },
  { name: 'Ebony', hex: '#0C0B1D', rgb: { r: 12, g: 11, b: 29 } },
  {
    name: 'Ebony Clay',
    hex: '#26283B',
    rgb: { r: 38, g: 40, b: 59 }
  },
  { name: 'Eclipse', hex: '#311C17', rgb: { r: 49, g: 28, b: 23 } },
  {
    name: 'Ecru White',
    hex: '#F5F3E5',
    rgb: { r: 245, g: 243, b: 229 }
  },
  {
    name: 'Ecstasy',
    hex: '#FA7814',
    rgb: { r: 250, g: 120, b: 20 }
  },
  { name: 'Eden', hex: '#105852', rgb: { r: 16, g: 88, b: 82 } },
  {
    name: 'Edgewater',
    hex: '#C8E3D7',
    rgb: { r: 200, g: 227, b: 215 }
  },
  {
    name: 'Edward',
    hex: '#A2AEAB',
    rgb: { r: 162, g: 174, b: 171 }
  },
  {
    name: 'Egg Sour',
    hex: '#FFF4DD',
    rgb: { r: 255, g: 244, b: 221 }
  },
  {
    name: 'Egg White',
    hex: '#FFEFC1',
    rgb: { r: 255, g: 239, b: 193 }
  },
  {
    name: 'Eggplant',
    hex: '#614051',
    rgb: { r: 97, g: 64, b: 81 }
  },
  { name: 'El Paso', hex: '#1E1708', rgb: { r: 30, g: 23, b: 8 } },
  {
    name: 'El Salva',
    hex: '#8F3E33',
    rgb: { r: 143, g: 62, b: 51 }
  },
  {
    name: 'Electric Lime',
    hex: '#CCFF00',
    rgb: { r: 204, g: 255, b: 0 }
  },
  {
    name: 'Electric Violet',
    hex: '#8B00FF',
    rgb: { r: 139, g: 0, b: 255 }
  },
  {
    name: 'Elephant',
    hex: '#123447',
    rgb: { r: 18, g: 52, b: 71 }
  },
  {
    name: 'Elf Green',
    hex: '#088370',
    rgb: { r: 8, g: 131, b: 112 }
  },
  { name: 'Elm', hex: '#1C7C7D', rgb: { r: 28, g: 124, b: 125 } },
  {
    name: 'Emerald',
    hex: '#50C878',
    rgb: { r: 80, g: 200, b: 120 }
  },
  {
    name: 'Eminence',
    hex: '#6C3082',
    rgb: { r: 108, g: 48, b: 130 }
  },
  { name: 'Emperor', hex: '#514649', rgb: { r: 81, g: 70, b: 73 } },
  {
    name: 'Empress',
    hex: '#817377',
    rgb: { r: 129, g: 115, b: 119 }
  },
  {
    name: 'Endeavour',
    hex: '#0056A7',
    rgb: { r: 0, g: 86, b: 167 }
  },
  {
    name: 'Energy Yellow',
    hex: '#F8DD5C',
    rgb: { r: 248, g: 221, b: 92 }
  },
  {
    name: 'English Holly',
    hex: '#022D15',
    rgb: { r: 2, g: 45, b: 21 }
  },
  {
    name: 'English Walnut',
    hex: '#3E2B23',
    rgb: { r: 62, g: 43, b: 35 }
  },
  { name: 'Envy', hex: '#8BA690', rgb: { r: 139, g: 166, b: 144 } },
  {
    name: 'Equator',
    hex: '#E1BC64',
    rgb: { r: 225, g: 188, b: 100 }
  },
  {
    name: 'Espresso',
    hex: '#612718',
    rgb: { r: 97, g: 39, b: 24 }
  },
  {
    name: 'Eternity',
    hex: '#211A0E',
    rgb: { r: 33, g: 26, b: 14 }
  },
  {
    name: 'Eucalyptus',
    hex: '#278A5B',
    rgb: { r: 39, g: 138, b: 91 }
  },
  {
    name: 'Eunry',
    hex: '#CFA39D',
    rgb: { r: 207, g: 163, b: 157 }
  },
  {
    name: 'Evening Sea',
    hex: '#024E46',
    rgb: { r: 2, g: 78, b: 70 }
  },
  {
    name: 'Everglade',
    hex: '#1C402E',
    rgb: { r: 28, g: 64, b: 46 }
  },
  {
    name: 'Faded Jade',
    hex: '#427977',
    rgb: { r: 66, g: 121, b: 119 }
  },
  {
    name: 'Fair Pink',
    hex: '#FFEFEC',
    rgb: { r: 255, g: 239, b: 236 }
  },
  {
    name: 'Falcon',
    hex: '#7F626D',
    rgb: { r: 127, g: 98, b: 109 }
  },
  {
    name: 'Fall Green',
    hex: '#ECEBBD',
    rgb: { r: 236, g: 235, b: 189 }
  },
  {
    name: 'Falu Red',
    hex: '#801818',
    rgb: { r: 128, g: 24, b: 24 }
  },
  {
    name: 'Fantasy',
    hex: '#FAF3F0',
    rgb: { r: 250, g: 243, b: 240 }
  },
  {
    name: 'Fedora',
    hex: '#796A78',
    rgb: { r: 121, g: 106, b: 120 }
  },
  {
    name: 'Feijoa',
    hex: '#9FDD8C',
    rgb: { r: 159, g: 221, b: 140 }
  },
  { name: 'Fern', hex: '#63B76C', rgb: { r: 99, g: 183, b: 108 } },
  {
    name: 'Fern Frond',
    hex: '#657220',
    rgb: { r: 101, g: 114, b: 32 }
  },
  {
    name: 'Fern Green',
    hex: '#4F7942',
    rgb: { r: 79, g: 121, b: 66 }
  },
  { name: 'Ferra', hex: '#704F50', rgb: { r: 112, g: 79, b: 80 } },
  {
    name: 'Festival',
    hex: '#FBE96C',
    rgb: { r: 251, g: 233, b: 108 }
  },
  { name: 'Feta', hex: '#F0FCEA', rgb: { r: 240, g: 252, b: 234 } },
  {
    name: 'Fiery Orange',
    hex: '#B35213',
    rgb: { r: 179, g: 82, b: 19 }
  },
  { name: 'Finch', hex: '#626649', rgb: { r: 98, g: 102, b: 73 } },
  {
    name: 'Finlandia',
    hex: '#556D56',
    rgb: { r: 85, g: 109, b: 86 }
  },
  { name: 'Finn', hex: '#692D54', rgb: { r: 105, g: 45, b: 84 } },
  { name: 'Fiord', hex: '#405169', rgb: { r: 64, g: 81, b: 105 } },
  { name: 'Fire', hex: '#AA4203', rgb: { r: 170, g: 66, b: 3 } },
  {
    name: 'Fire Bush',
    hex: '#E89928',
    rgb: { r: 232, g: 153, b: 40 }
  },
  { name: 'Firefly', hex: '#0E2A30', rgb: { r: 14, g: 42, b: 48 } },
  {
    name: 'Flame Pea',
    hex: '#DA5B38',
    rgb: { r: 218, g: 91, b: 56 }
  },
  {
    name: 'Flamenco',
    hex: '#FF7D07',
    rgb: { r: 255, g: 125, b: 7 }
  },
  {
    name: 'Flamingo',
    hex: '#F2552A',
    rgb: { r: 242, g: 85, b: 42 }
  },
  { name: 'Flax', hex: '#EEDC82', rgb: { r: 238, g: 220, b: 130 } },
  {
    name: 'Flax Smoke',
    hex: '#7B8265',
    rgb: { r: 123, g: 130, b: 101 }
  },
  {
    name: 'Flesh',
    hex: '#FFCBA4',
    rgb: { r: 255, g: 203, b: 164 }
  },
  { name: 'Flint', hex: '#6F6A61', rgb: { r: 111, g: 106, b: 97 } },
  { name: 'Flirt', hex: '#A2006D', rgb: { r: 162, g: 0, b: 109 } },
  {
    name: 'Flush Mahogany',
    hex: '#CA3435',
    rgb: { r: 202, g: 52, b: 53 }
  },
  {
    name: 'Flush Orange',
    hex: '#FF7F00',
    rgb: { r: 255, g: 127, b: 0 }
  },
  { name: 'Foam', hex: '#D8FCFA', rgb: { r: 216, g: 252, b: 250 } },
  { name: 'Fog', hex: '#D7D0FF', rgb: { r: 215, g: 208, b: 255 } },
  {
    name: 'Foggy Gray',
    hex: '#CBCAB6',
    rgb: { r: 203, g: 202, b: 182 }
  },
  {
    name: 'Forest Green',
    hex: '#228B22',
    rgb: { r: 34, g: 139, b: 34 }
  },
  {
    name: 'Forget Me Not',
    hex: '#FFF1EE',
    rgb: { r: 255, g: 241, b: 238 }
  },
  {
    name: 'Fountain Blue',
    hex: '#56B4BE',
    rgb: { r: 86, g: 180, b: 190 }
  },
  {
    name: 'Frangipani',
    hex: '#FFDEB3',
    rgb: { r: 255, g: 222, b: 179 }
  },
  {
    name: 'French Gray',
    hex: '#BDBDC6',
    rgb: { r: 189, g: 189, b: 198 }
  },
  {
    name: 'French Lilac',
    hex: '#ECC7EE',
    rgb: { r: 236, g: 199, b: 238 }
  },
  {
    name: 'French Pass',
    hex: '#BDEDFD',
    rgb: { r: 189, g: 237, b: 253 }
  },
  {
    name: 'French Rose',
    hex: '#F64A8A',
    rgb: { r: 246, g: 74, b: 138 }
  },
  {
    name: 'Fresh Eggplant',
    hex: '#990066',
    rgb: { r: 153, g: 0, b: 102 }
  },
  {
    name: 'Friar Gray',
    hex: '#807E79',
    rgb: { r: 128, g: 126, b: 121 }
  },
  {
    name: 'Fringy Flower',
    hex: '#B1E2C1',
    rgb: { r: 177, g: 226, b: 193 }
  },
  {
    name: 'Froly',
    hex: '#F57584',
    rgb: { r: 245, g: 117, b: 132 }
  },
  {
    name: 'Frost',
    hex: '#EDF5DD',
    rgb: { r: 237, g: 245, b: 221 }
  },
  {
    name: 'Frosted Mint',
    hex: '#DBFFF8',
    rgb: { r: 219, g: 255, b: 248 }
  },
  {
    name: 'Frostee',
    hex: '#E4F6E7',
    rgb: { r: 228, g: 246, b: 231 }
  },
  {
    name: 'Fruit Salad',
    hex: '#4F9D5D',
    rgb: { r: 79, g: 157, b: 93 }
  },
  {
    name: 'Fuchsia Blue',
    hex: '#7A58C1',
    rgb: { r: 122, g: 88, b: 193 }
  },
  {
    name: 'Fuchsia Pink',
    hex: '#C154C1',
    rgb: { r: 193, g: 84, b: 193 }
  },
  { name: 'Fuego', hex: '#BEDE0D', rgb: { r: 190, g: 222, b: 13 } },
  {
    name: 'Fuel Yellow',
    hex: '#ECA927',
    rgb: { r: 236, g: 169, b: 39 }
  },
  {
    name: 'Fun Blue',
    hex: '#1959A8',
    rgb: { r: 25, g: 89, b: 168 }
  },
  {
    name: 'Fun Green',
    hex: '#016D39',
    rgb: { r: 1, g: 109, b: 57 }
  },
  {
    name: 'Fuscous Gray',
    hex: '#54534D',
    rgb: { r: 84, g: 83, b: 77 }
  },
  {
    name: 'Fuzzy Wuzzy Brown',
    hex: '#C45655',
    rgb: { r: 196, g: 86, b: 85 }
  },
  {
    name: 'Gable Green',
    hex: '#163531',
    rgb: { r: 22, g: 53, b: 49 }
  },
  {
    name: 'Gallery',
    hex: '#EFEFEF',
    rgb: { r: 239, g: 239, b: 239 }
  },
  {
    name: 'Galliano',
    hex: '#DCB20C',
    rgb: { r: 220, g: 178, b: 12 }
  },
  {
    name: 'Gamboge',
    hex: '#E49B0F',
    rgb: { r: 228, g: 155, b: 15 }
  },
  {
    name: 'Geebung',
    hex: '#D18F1B',
    rgb: { r: 209, g: 143, b: 27 }
  },
  { name: 'Genoa', hex: '#15736B', rgb: { r: 21, g: 115, b: 107 } },
  {
    name: 'Geraldine',
    hex: '#FB8989',
    rgb: { r: 251, g: 137, b: 137 }
  },
  {
    name: 'Geyser',
    hex: '#D4DFE2',
    rgb: { r: 212, g: 223, b: 226 }
  },
  {
    name: 'Ghost',
    hex: '#C7C9D5',
    rgb: { r: 199, g: 201, b: 213 }
  },
  { name: 'Gigas', hex: '#523C94', rgb: { r: 82, g: 60, b: 148 } },
  {
    name: 'Gimblet',
    hex: '#B8B56A',
    rgb: { r: 184, g: 181, b: 106 }
  },
  { name: 'Gin', hex: '#E8F2EB', rgb: { r: 232, g: 242, b: 235 } },
  {
    name: 'Gin Fizz',
    hex: '#FFF9E2',
    rgb: { r: 255, g: 249, b: 226 }
  },
  {
    name: 'Givry',
    hex: '#F8E4BF',
    rgb: { r: 248, g: 228, b: 191 }
  },
  {
    name: 'Glacier',
    hex: '#80B3C4',
    rgb: { r: 128, g: 179, b: 196 }
  },
  {
    name: 'Glade Green',
    hex: '#61845F',
    rgb: { r: 97, g: 132, b: 95 }
  },
  {
    name: 'Go Ben',
    hex: '#726D4E',
    rgb: { r: 114, g: 109, b: 78 }
  },
  { name: 'Goblin', hex: '#3D7D52', rgb: { r: 61, g: 125, b: 82 } },
  { name: 'Gold', hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 } },
  {
    name: 'Gold Drop',
    hex: '#F18200',
    rgb: { r: 241, g: 130, b: 0 }
  },
  {
    name: 'Gold Sand',
    hex: '#E6BE8A',
    rgb: { r: 230, g: 190, b: 138 }
  },
  {
    name: 'Gold Tips',
    hex: '#DEBA13',
    rgb: { r: 222, g: 186, b: 19 }
  },
  {
    name: 'Golden Bell',
    hex: '#E28913',
    rgb: { r: 226, g: 137, b: 19 }
  },
  {
    name: 'Golden Dream',
    hex: '#F0D52D',
    rgb: { r: 240, g: 213, b: 45 }
  },
  {
    name: 'Golden Fizz',
    hex: '#F5FB3D',
    rgb: { r: 245, g: 251, b: 61 }
  },
  {
    name: 'Golden Glow',
    hex: '#FDE295',
    rgb: { r: 253, g: 226, b: 149 }
  },
  {
    name: 'Golden Grass',
    hex: '#DAA520',
    rgb: { r: 218, g: 165, b: 32 }
  },
  {
    name: 'Golden Sand',
    hex: '#F0DB7D',
    rgb: { r: 240, g: 219, b: 125 }
  },
  {
    name: 'Golden Tainoi',
    hex: '#FFCC5C',
    rgb: { r: 255, g: 204, b: 92 }
  },
  {
    name: 'Goldenrod',
    hex: '#FCD667',
    rgb: { r: 252, g: 214, b: 103 }
  },
  { name: 'Gondola', hex: '#261414', rgb: { r: 38, g: 20, b: 20 } },
  {
    name: 'Gordons Green',
    hex: '#0B1107',
    rgb: { r: 11, g: 17, b: 7 }
  },
  { name: 'Gorse', hex: '#FFF14F', rgb: { r: 255, g: 241, b: 79 } },
  {
    name: 'Gossamer',
    hex: '#069B81',
    rgb: { r: 6, g: 155, b: 129 }
  },
  {
    name: 'Gossip',
    hex: '#D2F8B0',
    rgb: { r: 210, g: 248, b: 176 }
  },
  {
    name: 'Gothic',
    hex: '#6D92A1',
    rgb: { r: 109, g: 146, b: 161 }
  },
  {
    name: 'Governor Bay',
    hex: '#2F3CB3',
    rgb: { r: 47, g: 60, b: 179 }
  },
  {
    name: 'Grain Brown',
    hex: '#E4D5B7',
    rgb: { r: 228, g: 213, b: 183 }
  },
  {
    name: 'Grandis',
    hex: '#FFD38C',
    rgb: { r: 255, g: 211, b: 140 }
  },
  {
    name: 'Granite Green',
    hex: '#8D8974',
    rgb: { r: 141, g: 137, b: 116 }
  },
  {
    name: 'Granny Apple',
    hex: '#D5F6E3',
    rgb: { r: 213, g: 246, b: 227 }
  },
  {
    name: 'Granny Smith',
    hex: '#84A0A0',
    rgb: { r: 132, g: 160, b: 160 }
  },
  {
    name: 'Granny Smith Apple',
    hex: '#9DE093',
    rgb: { r: 157, g: 224, b: 147 }
  },
  { name: 'Grape', hex: '#381A51', rgb: { r: 56, g: 26, b: 81 } },
  { name: 'Graphite', hex: '#251607', rgb: { r: 37, g: 22, b: 7 } },
  { name: 'Gravel', hex: '#4A444B', rgb: { r: 74, g: 68, b: 75 } },
  { name: 'Gray', hex: '#808080', rgb: { r: 128, g: 128, b: 128 } },
  {
    name: 'Gray Asparagus',
    hex: '#465945',
    rgb: { r: 70, g: 89, b: 69 }
  },
  {
    name: 'Gray Chateau',
    hex: '#A2AAB3',
    rgb: { r: 162, g: 170, b: 179 }
  },
  {
    name: 'Gray Nickel',
    hex: '#C3C3BD',
    rgb: { r: 195, g: 195, b: 189 }
  },
  {
    name: 'Gray Nurse',
    hex: '#E7ECE6',
    rgb: { r: 231, g: 236, b: 230 }
  },
  {
    name: 'Gray Olive',
    hex: '#A9A491',
    rgb: { r: 169, g: 164, b: 145 }
  },
  {
    name: 'Gray Suit',
    hex: '#C1BECD',
    rgb: { r: 193, g: 190, b: 205 }
  },
  { name: 'Green', hex: '#00FF00', rgb: { r: 0, g: 255, b: 0 } },
  {
    name: 'Green Haze',
    hex: '#01A368',
    rgb: { r: 1, g: 163, b: 104 }
  },
  {
    name: 'Green House',
    hex: '#24500F',
    rgb: { r: 36, g: 80, b: 15 }
  },
  {
    name: 'Green Kelp',
    hex: '#25311C',
    rgb: { r: 37, g: 49, b: 28 }
  },
  {
    name: 'Green Leaf',
    hex: '#436A0D',
    rgb: { r: 67, g: 106, b: 13 }
  },
  {
    name: 'Green Mist',
    hex: '#CBD3B0',
    rgb: { r: 203, g: 211, b: 176 }
  },
  {
    name: 'Green Pea',
    hex: '#1D6142',
    rgb: { r: 29, g: 97, b: 66 }
  },
  {
    name: 'Green Smoke',
    hex: '#A4AF6E',
    rgb: { r: 164, g: 175, b: 110 }
  },
  {
    name: 'Green Spring',
    hex: '#B8C1B1',
    rgb: { r: 184, g: 193, b: 177 }
  },
  {
    name: 'Green Vogue',
    hex: '#032B52',
    rgb: { r: 3, g: 43, b: 82 }
  },
  {
    name: 'Green Waterloo',
    hex: '#101405',
    rgb: { r: 16, g: 20, b: 5 }
  },
  {
    name: 'Green White',
    hex: '#E8EBE0',
    rgb: { r: 232, g: 235, b: 224 }
  },
  {
    name: 'Green Yellow',
    hex: '#ADFF2F',
    rgb: { r: 173, g: 255, b: 47 }
  },
  {
    name: 'Grenadier',
    hex: '#D54600',
    rgb: { r: 213, g: 70, b: 0 }
  },
  {
    name: 'Guardsman Red',
    hex: '#BA0101',
    rgb: { r: 186, g: 1, b: 1 }
  },
  {
    name: 'Gulf Blue',
    hex: '#051657',
    rgb: { r: 5, g: 22, b: 87 }
  },
  {
    name: 'Gulf Stream',
    hex: '#80B3AE',
    rgb: { r: 128, g: 179, b: 174 }
  },
  {
    name: 'Gull Gray',
    hex: '#9DACB7',
    rgb: { r: 157, g: 172, b: 183 }
  },
  {
    name: 'Gum Leaf',
    hex: '#B6D3BF',
    rgb: { r: 182, g: 211, b: 191 }
  },
  {
    name: 'Gumbo',
    hex: '#7CA1A6',
    rgb: { r: 124, g: 161, b: 166 }
  },
  {
    name: 'Gun Powder',
    hex: '#414257',
    rgb: { r: 65, g: 66, b: 87 }
  },
  {
    name: 'Gunsmoke',
    hex: '#828685',
    rgb: { r: 130, g: 134, b: 133 }
  },
  {
    name: 'Gurkha',
    hex: '#9A9577',
    rgb: { r: 154, g: 149, b: 119 }
  },
  {
    name: 'Hacienda',
    hex: '#98811B',
    rgb: { r: 152, g: 129, b: 27 }
  },
  {
    name: 'Hairy Heath',
    hex: '#6B2A14',
    rgb: { r: 107, g: 42, b: 20 }
  },
  { name: 'Haiti', hex: '#1B1035', rgb: { r: 27, g: 16, b: 53 } },
  {
    name: 'Half And Half',
    hex: '#FFFEE1',
    rgb: { r: 255, g: 254, b: 225 }
  },
  {
    name: 'Half Baked',
    hex: '#85C4CC',
    rgb: { r: 133, g: 196, b: 204 }
  },
  {
    name: 'Half Colonial White',
    hex: '#FDF6D3',
    rgb: { r: 253, g: 246, b: 211 }
  },
  {
    name: 'Half Dutch White',
    hex: '#FEF7DE',
    rgb: { r: 254, g: 247, b: 222 }
  },
  {
    name: 'Half Spanish White',
    hex: '#FEF4DB',
    rgb: { r: 254, g: 244, b: 219 }
  },
  {
    name: 'Hampton',
    hex: '#E5D8AF',
    rgb: { r: 229, g: 216, b: 175 }
  },
  {
    name: 'Harlequin',
    hex: '#3FFF00',
    rgb: { r: 63, g: 255, b: 0 }
  },
  { name: 'Harp', hex: '#E6F2EA', rgb: { r: 230, g: 242, b: 234 } },
  {
    name: 'Harvest Gold',
    hex: '#E0B974',
    rgb: { r: 224, g: 185, b: 116 }
  },
  {
    name: 'Havelock Blue',
    hex: '#5590D9',
    rgb: { r: 85, g: 144, b: 217 }
  },
  {
    name: 'Hawaiian Tan',
    hex: '#9D5616',
    rgb: { r: 157, g: 86, b: 22 }
  },
  {
    name: 'Hawkes Blue',
    hex: '#D4E2FC',
    rgb: { r: 212, g: 226, b: 252 }
  },
  { name: 'Heath', hex: '#541012', rgb: { r: 84, g: 16, b: 18 } },
  {
    name: 'Heather',
    hex: '#B7C3D0',
    rgb: { r: 183, g: 195, b: 208 }
  },
  {
    name: 'Heathered Gray',
    hex: '#B6B095',
    rgb: { r: 182, g: 176, b: 149 }
  },
  {
    name: 'Heavy Metal',
    hex: '#2B3228',
    rgb: { r: 43, g: 50, b: 40 }
  },
  {
    name: 'Heliotrope',
    hex: '#DF73FF',
    rgb: { r: 223, g: 115, b: 255 }
  },
  { name: 'Hemlock', hex: '#5E5D3B', rgb: { r: 94, g: 93, b: 59 } },
  { name: 'Hemp', hex: '#907874', rgb: { r: 144, g: 120, b: 116 } },
  {
    name: 'Hibiscus',
    hex: '#B6316C',
    rgb: { r: 182, g: 49, b: 108 }
  },
  {
    name: 'Highland',
    hex: '#6F8E63',
    rgb: { r: 111, g: 142, b: 99 }
  },
  {
    name: 'Hillary',
    hex: '#ACA586',
    rgb: { r: 172, g: 165, b: 134 }
  },
  {
    name: 'Himalaya',
    hex: '#6A5D1B',
    rgb: { r: 106, g: 93, b: 27 }
  },
  {
    name: 'Hint Of Green',
    hex: '#E6FFE9',
    rgb: { r: 230, g: 255, b: 233 }
  },
  {
    name: 'Hint Of Red',
    hex: '#FBF9F9',
    rgb: { r: 251, g: 249, b: 249 }
  },
  {
    name: 'Hint Of Yellow',
    hex: '#FAFDE4',
    rgb: { r: 250, g: 253, b: 228 }
  },
  {
    name: 'Hippie Blue',
    hex: '#589AAF',
    rgb: { r: 88, g: 154, b: 175 }
  },
  {
    name: 'Hippie Green',
    hex: '#53824B',
    rgb: { r: 83, g: 130, b: 75 }
  },
  {
    name: 'Hippie Pink',
    hex: '#AE4560',
    rgb: { r: 174, g: 69, b: 96 }
  },
  {
    name: 'Hit Gray',
    hex: '#A1ADB5',
    rgb: { r: 161, g: 173, b: 181 }
  },
  {
    name: 'Hit Pink',
    hex: '#FFAB81',
    rgb: { r: 255, g: 171, b: 129 }
  },
  {
    name: 'Hokey Pokey',
    hex: '#C8A528',
    rgb: { r: 200, g: 165, b: 40 }
  },
  { name: 'Hoki', hex: '#65869F', rgb: { r: 101, g: 134, b: 159 } },
  { name: 'Holly', hex: '#011D13', rgb: { r: 1, g: 29, b: 19 } },
  {
    name: 'Hollywood Cerise',
    hex: '#F400A1',
    rgb: { r: 244, g: 0, b: 161 }
  },
  {
    name: 'Honey Flower',
    hex: '#4F1C70',
    rgb: { r: 79, g: 28, b: 112 }
  },
  {
    name: 'Honeysuckle',
    hex: '#EDFC84',
    rgb: { r: 237, g: 252, b: 132 }
  },
  {
    name: 'Hopbush',
    hex: '#D06DA1',
    rgb: { r: 208, g: 109, b: 161 }
  },
  {
    name: 'Horizon',
    hex: '#5A87A0',
    rgb: { r: 90, g: 135, b: 160 }
  },
  {
    name: 'Horses Neck',
    hex: '#604913',
    rgb: { r: 96, g: 73, b: 19 }
  },
  {
    name: 'Hot Cinnamon',
    hex: '#D2691E',
    rgb: { r: 210, g: 105, b: 30 }
  },
  {
    name: 'Hot Pink',
    hex: '#FF69B4',
    rgb: { r: 255, g: 105, b: 180 }
  },
  {
    name: 'Hot Toddy',
    hex: '#B38007',
    rgb: { r: 179, g: 128, b: 7 }
  },
  {
    name: 'Humming Bird',
    hex: '#CFF9F3',
    rgb: { r: 207, g: 249, b: 243 }
  },
  {
    name: 'Hunter Green',
    hex: '#161D10',
    rgb: { r: 22, g: 29, b: 16 }
  },
  {
    name: 'Hurricane',
    hex: '#877C7B',
    rgb: { r: 135, g: 124, b: 123 }
  },
  { name: 'Husk', hex: '#B7A458', rgb: { r: 183, g: 164, b: 88 } },
  {
    name: 'Ice Cold',
    hex: '#B1F4E7',
    rgb: { r: 177, g: 244, b: 231 }
  },
  {
    name: 'Iceberg',
    hex: '#DAF4F0',
    rgb: { r: 218, g: 244, b: 240 }
  },
  {
    name: 'Illusion',
    hex: '#F6A4C9',
    rgb: { r: 246, g: 164, b: 201 }
  },
  {
    name: 'Inch Worm',
    hex: '#B0E313',
    rgb: { r: 176, g: 227, b: 19 }
  },
  {
    name: 'Indian Khaki',
    hex: '#C3B091',
    rgb: { r: 195, g: 176, b: 145 }
  },
  {
    name: 'Indian Tan',
    hex: '#4D1E01',
    rgb: { r: 77, g: 30, b: 1 }
  },
  {
    name: 'Indigo',
    hex: '#4F69C6',
    rgb: { r: 79, g: 105, b: 198 }
  },
  {
    name: 'Indochine',
    hex: '#C26B03',
    rgb: { r: 194, g: 107, b: 3 }
  },
  {
    name: 'International Klein Blue',
    hex: '#002FA7',
    rgb: { r: 0, g: 47, b: 167 }
  },
  {
    name: 'International Orange',
    hex: '#FF4F00',
    rgb: { r: 255, g: 79, b: 0 }
  },
  {
    name: 'Irish Coffee',
    hex: '#5F3D26',
    rgb: { r: 95, g: 61, b: 38 }
  },
  { name: 'Iroko', hex: '#433120', rgb: { r: 67, g: 49, b: 32 } },
  { name: 'Iron', hex: '#D4D7D9', rgb: { r: 212, g: 215, b: 217 } },
  {
    name: 'Ironside Gray',
    hex: '#676662',
    rgb: { r: 103, g: 102, b: 98 }
  },
  {
    name: 'Ironstone',
    hex: '#86483C',
    rgb: { r: 134, g: 72, b: 60 }
  },
  {
    name: 'Island Spice',
    hex: '#FFFCEE',
    rgb: { r: 255, g: 252, b: 238 }
  },
  {
    name: 'Ivory',
    hex: '#FFFFF0',
    rgb: { r: 255, g: 255, b: 240 }
  },
  {
    name: 'Jacaranda',
    hex: '#2E0329',
    rgb: { r: 46, g: 3, b: 41 }
  },
  {
    name: 'Jacarta',
    hex: '#3A2A6A',
    rgb: { r: 58, g: 42, b: 106 }
  },
  {
    name: 'Jacko Bean',
    hex: '#2E1905',
    rgb: { r: 46, g: 25, b: 5 }
  },
  {
    name: 'Jacksons Purple',
    hex: '#20208D',
    rgb: { r: 32, g: 32, b: 141 }
  },
  { name: 'Jade', hex: '#00A86B', rgb: { r: 0, g: 168, b: 107 } },
  { name: 'Jaffa', hex: '#EF863F', rgb: { r: 239, g: 134, b: 63 } },
  {
    name: 'Jagged Ice',
    hex: '#C2E8E5',
    rgb: { r: 194, g: 232, b: 229 }
  },
  { name: 'Jagger', hex: '#350E57', rgb: { r: 53, g: 14, b: 87 } },
  { name: 'Jaguar', hex: '#080110', rgb: { r: 8, g: 1, b: 16 } },
  {
    name: 'Jambalaya',
    hex: '#5B3013',
    rgb: { r: 91, g: 48, b: 19 }
  },
  {
    name: 'Janna',
    hex: '#F4EBD3',
    rgb: { r: 244, g: 235, b: 211 }
  },
  {
    name: 'Japanese Laurel',
    hex: '#0A6906',
    rgb: { r: 10, g: 105, b: 6 }
  },
  {
    name: 'Japanese Maple',
    hex: '#780109',
    rgb: { r: 120, g: 1, b: 9 }
  },
  {
    name: 'Japonica',
    hex: '#D87C63',
    rgb: { r: 216, g: 124, b: 99 }
  },
  { name: 'Java', hex: '#1FC2C2', rgb: { r: 31, g: 194, b: 194 } },
  {
    name: 'Jazzberry Jam',
    hex: '#A50B5E',
    rgb: { r: 165, g: 11, b: 94 }
  },
  {
    name: 'Jelly Bean',
    hex: '#297B9A',
    rgb: { r: 41, g: 123, b: 154 }
  },
  {
    name: 'Jet Stream',
    hex: '#B5D2CE',
    rgb: { r: 181, g: 210, b: 206 }
  },
  { name: 'Jewel', hex: '#126B40', rgb: { r: 18, g: 107, b: 64 } },
  { name: 'Jon', hex: '#3B1F1F', rgb: { r: 59, g: 31, b: 31 } },
  {
    name: 'Jonquil',
    hex: '#EEFF9A',
    rgb: { r: 238, g: 255, b: 154 }
  },
  {
    name: 'Jordy Blue',
    hex: '#8AB9F1',
    rgb: { r: 138, g: 185, b: 241 }
  },
  {
    name: 'Judge Gray',
    hex: '#544333',
    rgb: { r: 84, g: 67, b: 51 }
  },
  {
    name: 'Jumbo',
    hex: '#7C7B82',
    rgb: { r: 124, g: 123, b: 130 }
  },
  {
    name: 'Jungle Green',
    hex: '#29AB87',
    rgb: { r: 41, g: 171, b: 135 }
  },
  {
    name: 'Jungle Mist',
    hex: '#B4CFD3',
    rgb: { r: 180, g: 207, b: 211 }
  },
  {
    name: 'Juniper',
    hex: '#6D9292',
    rgb: { r: 109, g: 146, b: 146 }
  },
  {
    name: 'Just Right',
    hex: '#ECCDB9',
    rgb: { r: 236, g: 205, b: 185 }
  },
  { name: 'Kabul', hex: '#5E483E', rgb: { r: 94, g: 72, b: 62 } },
  {
    name: 'Kaitoke Green',
    hex: '#004620',
    rgb: { r: 0, g: 70, b: 32 }
  },
  {
    name: 'Kangaroo',
    hex: '#C6C8BD',
    rgb: { r: 198, g: 200, b: 189 }
  },
  { name: 'Karaka', hex: '#1E1609', rgb: { r: 30, g: 22, b: 9 } },
  {
    name: 'Karry',
    hex: '#FFEAD4',
    rgb: { r: 255, g: 234, b: 212 }
  },
  {
    name: 'Kashmir Blue',
    hex: '#507096',
    rgb: { r: 80, g: 112, b: 150 }
  },
  { name: 'Kelp', hex: '#454936', rgb: { r: 69, g: 73, b: 54 } },
  {
    name: 'Kenyan Copper',
    hex: '#7C1C05',
    rgb: { r: 124, g: 28, b: 5 }
  },
  {
    name: 'Keppel',
    hex: '#3AB09E',
    rgb: { r: 58, g: 176, b: 158 }
  },
  {
    name: 'Key Lime Pie',
    hex: '#BFC921',
    rgb: { r: 191, g: 201, b: 33 }
  },
  {
    name: 'Khaki',
    hex: '#F0E68C',
    rgb: { r: 240, g: 230, b: 140 }
  },
  {
    name: 'Kidnapper',
    hex: '#E1EAD4',
    rgb: { r: 225, g: 234, b: 212 }
  },
  {
    name: 'Kilamanjaro',
    hex: '#240C02',
    rgb: { r: 36, g: 12, b: 2 }
  },
  {
    name: 'Killarney',
    hex: '#3A6A47',
    rgb: { r: 58, g: 106, b: 71 }
  },
  {
    name: 'Kimberly',
    hex: '#736C9F',
    rgb: { r: 115, g: 108, b: 159 }
  },
  {
    name: 'Kingfisher Daisy',
    hex: '#3E0480',
    rgb: { r: 62, g: 4, b: 128 }
  },
  { name: 'Kobi', hex: '#E79FC4', rgb: { r: 231, g: 159, b: 196 } },
  {
    name: 'Kokoda',
    hex: '#6E6D57',
    rgb: { r: 110, g: 109, b: 87 }
  },
  { name: 'Korma', hex: '#8F4B0E', rgb: { r: 143, g: 75, b: 14 } },
  {
    name: 'Koromiko',
    hex: '#FFBD5F',
    rgb: { r: 255, g: 189, b: 95 }
  },
  {
    name: 'Kournikova',
    hex: '#FFE772',
    rgb: { r: 255, g: 231, b: 114 }
  },
  { name: 'Kumera', hex: '#886221', rgb: { r: 136, g: 98, b: 33 } },
  {
    name: 'La Palma',
    hex: '#368716',
    rgb: { r: 54, g: 135, b: 22 }
  },
  {
    name: 'La Rioja',
    hex: '#B3C110',
    rgb: { r: 179, g: 193, b: 16 }
  },
  {
    name: 'Las Palmas',
    hex: '#C6E610',
    rgb: { r: 198, g: 230, b: 16 }
  },
  {
    name: 'Laser',
    hex: '#C8B568',
    rgb: { r: 200, g: 181, b: 104 }
  },
  {
    name: 'Laser Lemon',
    hex: '#FFFF66',
    rgb: { r: 255, g: 255, b: 102 }
  },
  {
    name: 'Laurel',
    hex: '#749378',
    rgb: { r: 116, g: 147, b: 120 }
  },
  {
    name: 'Lavender',
    hex: '#B57EDC',
    rgb: { r: 181, g: 126, b: 220 }
  },
  {
    name: 'Lavender Blush',
    hex: '#FFF0F5',
    rgb: { r: 255, g: 240, b: 245 }
  },
  {
    name: 'Lavender Gray',
    hex: '#BDBBD7',
    rgb: { r: 189, g: 187, b: 215 }
  },
  {
    name: 'Lavender Magenta',
    hex: '#EE82EE',
    rgb: { r: 238, g: 130, b: 238 }
  },
  {
    name: 'Lavender Pink',
    hex: '#FBAED2',
    rgb: { r: 251, g: 174, b: 210 }
  },
  {
    name: 'Lavender Purple',
    hex: '#967BB6',
    rgb: { r: 150, g: 123, b: 182 }
  },
  {
    name: 'Lavender Rose',
    hex: '#FBA0E3',
    rgb: { r: 251, g: 160, b: 227 }
  },
  {
    name: 'Leather',
    hex: '#967059',
    rgb: { r: 150, g: 112, b: 89 }
  },
  { name: 'Lemon', hex: '#FDE910', rgb: { r: 253, g: 233, b: 16 } },
  {
    name: 'Lemon Chiffon',
    hex: '#FFFACD',
    rgb: { r: 255, g: 250, b: 205 }
  },
  {
    name: 'Lemon Ginger',
    hex: '#AC9E22',
    rgb: { r: 172, g: 158, b: 34 }
  },
  {
    name: 'Lemon Grass',
    hex: '#9B9E8F',
    rgb: { r: 155, g: 158, b: 143 }
  },
  {
    name: 'Light Apricot',
    hex: '#FDD5B1',
    rgb: { r: 253, g: 213, b: 177 }
  },
  {
    name: 'Light Orchid',
    hex: '#E29CD2',
    rgb: { r: 226, g: 156, b: 210 }
  },
  {
    name: 'Light Wisteria',
    hex: '#C9A0DC',
    rgb: { r: 201, g: 160, b: 220 }
  },
  {
    name: 'Lightning Yellow',
    hex: '#FCC01E',
    rgb: { r: 252, g: 192, b: 30 }
  },
  {
    name: 'Lilac',
    hex: '#C8A2C8',
    rgb: { r: 200, g: 162, b: 200 }
  },
  {
    name: 'Lilac Bush',
    hex: '#9874D3',
    rgb: { r: 152, g: 116, b: 211 }
  },
  { name: 'Lily', hex: '#C8AABF', rgb: { r: 200, g: 170, b: 191 } },
  {
    name: 'Lily White',
    hex: '#E7F8FF',
    rgb: { r: 231, g: 248, b: 255 }
  },
  { name: 'Lima', hex: '#76BD17', rgb: { r: 118, g: 189, b: 23 } },
  { name: 'Lime', hex: '#BFFF00', rgb: { r: 191, g: 255, b: 0 } },
  {
    name: 'Limeade',
    hex: '#6F9D02',
    rgb: { r: 111, g: 157, b: 2 }
  },
  {
    name: 'Limed Ash',
    hex: '#747D63',
    rgb: { r: 116, g: 125, b: 99 }
  },
  {
    name: 'Limed Oak',
    hex: '#AC8A56',
    rgb: { r: 172, g: 138, b: 86 }
  },
  {
    name: 'Limed Spruce',
    hex: '#394851',
    rgb: { r: 57, g: 72, b: 81 }
  },
  {
    name: 'Linen',
    hex: '#FAF0E6',
    rgb: { r: 250, g: 240, b: 230 }
  },
  {
    name: 'Link Water',
    hex: '#D9E4F5',
    rgb: { r: 217, g: 228, b: 245 }
  },
  {
    name: 'Lipstick',
    hex: '#AB0563',
    rgb: { r: 171, g: 5, b: 99 }
  },
  {
    name: 'Lisbon Brown',
    hex: '#423921',
    rgb: { r: 66, g: 57, b: 33 }
  },
  {
    name: 'Livid Brown',
    hex: '#4D282E',
    rgb: { r: 77, g: 40, b: 46 }
  },
  {
    name: 'Loafer',
    hex: '#EEF4DE',
    rgb: { r: 238, g: 244, b: 222 }
  },
  {
    name: 'Loblolly',
    hex: '#BDC9CE',
    rgb: { r: 189, g: 201, b: 206 }
  },
  {
    name: 'Lochinvar',
    hex: '#2C8C84',
    rgb: { r: 44, g: 140, b: 132 }
  },
  {
    name: 'Lochmara',
    hex: '#007EC7',
    rgb: { r: 0, g: 126, b: 199 }
  },
  {
    name: 'Locust',
    hex: '#A8AF8E',
    rgb: { r: 168, g: 175, b: 142 }
  },
  {
    name: 'Log Cabin',
    hex: '#242A1D',
    rgb: { r: 36, g: 42, b: 29 }
  },
  {
    name: 'Logan',
    hex: '#AAA9CD',
    rgb: { r: 170, g: 169, b: 205 }
  },
  { name: 'Lola', hex: '#DFCFDB', rgb: { r: 223, g: 207, b: 219 } },
  {
    name: 'London Hue',
    hex: '#BEA6C3',
    rgb: { r: 190, g: 166, b: 195 }
  },
  { name: 'Lonestar', hex: '#6D0101', rgb: { r: 109, g: 1, b: 1 } },
  { name: 'Lotus', hex: '#863C3C', rgb: { r: 134, g: 60, b: 60 } },
  { name: 'Loulou', hex: '#460B41', rgb: { r: 70, g: 11, b: 65 } },
  { name: 'Lucky', hex: '#AF9F1C', rgb: { r: 175, g: 159, b: 28 } },
  {
    name: 'Lucky Point',
    hex: '#1A1A68',
    rgb: { r: 26, g: 26, b: 104 }
  },
  {
    name: 'Lunar Green',
    hex: '#3C493A',
    rgb: { r: 60, g: 73, b: 58 }
  },
  {
    name: 'Luxor Gold',
    hex: '#A7882C',
    rgb: { r: 167, g: 136, b: 44 }
  },
  {
    name: 'Lynch',
    hex: '#697E9A',
    rgb: { r: 105, g: 126, b: 154 }
  },
  {
    name: 'Mabel',
    hex: '#D9F7FF',
    rgb: { r: 217, g: 247, b: 255 }
  },
  {
    name: 'Macaroni And Cheese',
    hex: '#FFB97B',
    rgb: { r: 255, g: 185, b: 123 }
  },
  {
    name: 'Madang',
    hex: '#B7F0BE',
    rgb: { r: 183, g: 240, b: 190 }
  },
  { name: 'Madison', hex: '#09255D', rgb: { r: 9, g: 37, b: 93 } },
  { name: 'Madras', hex: '#3F3002', rgb: { r: 63, g: 48, b: 2 } },
  {
    name: 'Magenta / Fuchsia',
    hex: '#FF00FF',
    rgb: { r: 255, g: 0, b: 255 }
  },
  {
    name: 'Magic Mint',
    hex: '#AAF0D1',
    rgb: { r: 170, g: 240, b: 209 }
  },
  {
    name: 'Magnolia',
    hex: '#F8F4FF',
    rgb: { r: 248, g: 244, b: 255 }
  },
  { name: 'Mahogany', hex: '#4E0606', rgb: { r: 78, g: 6, b: 6 } },
  {
    name: 'Mai Tai',
    hex: '#B06608',
    rgb: { r: 176, g: 102, b: 8 }
  },
  {
    name: 'Maize',
    hex: '#F5D5A0',
    rgb: { r: 245, g: 213, b: 160 }
  },
  {
    name: 'Makara',
    hex: '#897D6D',
    rgb: { r: 137, g: 125, b: 109 }
  },
  { name: 'Mako', hex: '#444954', rgb: { r: 68, g: 73, b: 84 } },
  {
    name: 'Malachite',
    hex: '#0BDA51',
    rgb: { r: 11, g: 218, b: 81 }
  },
  {
    name: 'Malibu',
    hex: '#7DC8F7',
    rgb: { r: 125, g: 200, b: 247 }
  },
  { name: 'Mallard', hex: '#233418', rgb: { r: 35, g: 52, b: 24 } },
  {
    name: 'Malta',
    hex: '#BDB2A1',
    rgb: { r: 189, g: 178, b: 161 }
  },
  {
    name: 'Mamba',
    hex: '#8E8190',
    rgb: { r: 142, g: 129, b: 144 }
  },
  {
    name: 'Manatee',
    hex: '#8D90A1',
    rgb: { r: 141, g: 144, b: 161 }
  },
  {
    name: 'Mandalay',
    hex: '#AD781B',
    rgb: { r: 173, g: 120, b: 27 }
  },
  { name: 'Mandy', hex: '#E25465', rgb: { r: 226, g: 84, b: 101 } },
  {
    name: 'Mandys Pink',
    hex: '#F2C3B2',
    rgb: { r: 242, g: 195, b: 178 }
  },
  {
    name: 'Mango Tango',
    hex: '#E77200',
    rgb: { r: 231, g: 114, b: 0 }
  },
  {
    name: 'Manhattan',
    hex: '#F5C999',
    rgb: { r: 245, g: 201, b: 153 }
  },
  {
    name: 'Mantis',
    hex: '#74C365',
    rgb: { r: 116, g: 195, b: 101 }
  },
  {
    name: 'Mantle',
    hex: '#8B9C90',
    rgb: { r: 139, g: 156, b: 144 }
  },
  { name: 'Manz', hex: '#EEEF78', rgb: { r: 238, g: 239, b: 120 } },
  {
    name: 'Mardi Gras',
    hex: '#350036',
    rgb: { r: 53, g: 0, b: 54 }
  },
  {
    name: 'Marigold',
    hex: '#B98D28',
    rgb: { r: 185, g: 141, b: 40 }
  },
  {
    name: 'Marigold Yellow',
    hex: '#FBE870',
    rgb: { r: 251, g: 232, b: 112 }
  },
  {
    name: 'Mariner',
    hex: '#286ACD',
    rgb: { r: 40, g: 106, b: 205 }
  },
  { name: 'Maroon', hex: '#800000', rgb: { r: 128, g: 0, b: 0 } },
  {
    name: 'Maroon Flush',
    hex: '#C32148',
    rgb: { r: 195, g: 33, b: 72 }
  },
  {
    name: 'Maroon Oak',
    hex: '#520C17',
    rgb: { r: 82, g: 12, b: 23 }
  },
  {
    name: 'Marshland',
    hex: '#0B0F08',
    rgb: { r: 11, g: 15, b: 8 }
  },
  {
    name: 'Martini',
    hex: '#AFA09E',
    rgb: { r: 175, g: 160, b: 158 }
  },
  {
    name: 'Martinique',
    hex: '#363050',
    rgb: { r: 54, g: 48, b: 80 }
  },
  {
    name: 'Marzipan',
    hex: '#F8DB9D',
    rgb: { r: 248, g: 219, b: 157 }
  },
  { name: 'Masala', hex: '#403B38', rgb: { r: 64, g: 59, b: 56 } },
  {
    name: 'Matisse',
    hex: '#1B659D',
    rgb: { r: 27, g: 101, b: 157 }
  },
  { name: 'Matrix', hex: '#B05D54', rgb: { r: 176, g: 93, b: 84 } },
  {
    name: 'Matterhorn',
    hex: '#4E3B41',
    rgb: { r: 78, g: 59, b: 65 }
  },
  {
    name: 'Mauve',
    hex: '#E0B0FF',
    rgb: { r: 224, g: 176, b: 255 }
  },
  {
    name: 'Mauvelous',
    hex: '#F091A9',
    rgb: { r: 240, g: 145, b: 169 }
  },
  {
    name: 'Maverick',
    hex: '#D8C2D5',
    rgb: { r: 216, g: 194, b: 213 }
  },
  {
    name: 'Medium Carmine',
    hex: '#AF4035',
    rgb: { r: 175, g: 64, b: 53 }
  },
  {
    name: 'Medium Purple',
    hex: '#9370DB',
    rgb: { r: 147, g: 112, b: 219 }
  },
  {
    name: 'Medium Red Violet',
    hex: '#BB3385',
    rgb: { r: 187, g: 51, b: 133 }
  },
  {
    name: 'Melanie',
    hex: '#E4C2D5',
    rgb: { r: 228, g: 194, b: 213 }
  },
  {
    name: 'Melanzane',
    hex: '#300529',
    rgb: { r: 48, g: 5, b: 41 }
  },
  {
    name: 'Melon',
    hex: '#FEBAAD',
    rgb: { r: 254, g: 186, b: 173 }
  },
  {
    name: 'Melrose',
    hex: '#C7C1FF',
    rgb: { r: 199, g: 193, b: 255 }
  },
  {
    name: 'Mercury',
    hex: '#E5E5E5',
    rgb: { r: 229, g: 229, b: 229 }
  },
  {
    name: 'Merino',
    hex: '#F6F0E6',
    rgb: { r: 246, g: 240, b: 230 }
  },
  { name: 'Merlin', hex: '#413C37', rgb: { r: 65, g: 60, b: 55 } },
  { name: 'Merlot', hex: '#831923', rgb: { r: 131, g: 25, b: 35 } },
  {
    name: 'Metallic Bronze',
    hex: '#49371B',
    rgb: { r: 73, g: 55, b: 27 }
  },
  {
    name: 'Metallic Copper',
    hex: '#71291D',
    rgb: { r: 113, g: 41, b: 29 }
  },
  {
    name: 'Meteor',
    hex: '#D07D12',
    rgb: { r: 208, g: 125, b: 18 }
  },
  {
    name: 'Meteorite',
    hex: '#3C1F76',
    rgb: { r: 60, g: 31, b: 118 }
  },
  {
    name: 'Mexican Red',
    hex: '#A72525',
    rgb: { r: 167, g: 37, b: 37 }
  },
  {
    name: 'Mid Gray',
    hex: '#5F5F6E',
    rgb: { r: 95, g: 95, b: 110 }
  },
  { name: 'Midnight', hex: '#011635', rgb: { r: 1, g: 22, b: 53 } },
  {
    name: 'Midnight Blue',
    hex: '#003366',
    rgb: { r: 0, g: 51, b: 102 }
  },
  {
    name: 'Midnight Moss',
    hex: '#041004',
    rgb: { r: 4, g: 16, b: 4 }
  },
  { name: 'Mikado', hex: '#2D2510', rgb: { r: 45, g: 37, b: 16 } },
  {
    name: 'Milan',
    hex: '#FAFFA4',
    rgb: { r: 250, g: 255, b: 164 }
  },
  {
    name: 'Milano Red',
    hex: '#B81104',
    rgb: { r: 184, g: 17, b: 4 }
  },
  {
    name: 'Milk Punch',
    hex: '#FFF6D4',
    rgb: { r: 255, g: 246, b: 212 }
  },
  {
    name: 'Millbrook',
    hex: '#594433',
    rgb: { r: 89, g: 68, b: 51 }
  },
  {
    name: 'Mimosa',
    hex: '#F8FDD3',
    rgb: { r: 248, g: 253, b: 211 }
  },
  {
    name: 'Mindaro',
    hex: '#E3F988',
    rgb: { r: 227, g: 249, b: 136 }
  },
  {
    name: 'Mine Shaft',
    hex: '#323232',
    rgb: { r: 50, g: 50, b: 50 }
  },
  {
    name: 'Mineral Green',
    hex: '#3F5D53',
    rgb: { r: 63, g: 93, b: 83 }
  },
  { name: 'Ming', hex: '#36747D', rgb: { r: 54, g: 116, b: 125 } },
  { name: 'Minsk', hex: '#3F307F', rgb: { r: 63, g: 48, b: 127 } },
  {
    name: 'Mint Green',
    hex: '#98FF98',
    rgb: { r: 152, g: 255, b: 152 }
  },
  {
    name: 'Mint Julep',
    hex: '#F1EEC1',
    rgb: { r: 241, g: 238, b: 193 }
  },
  {
    name: 'Mint Tulip',
    hex: '#C4F4EB',
    rgb: { r: 196, g: 244, b: 235 }
  },
  { name: 'Mirage', hex: '#161928', rgb: { r: 22, g: 25, b: 40 } },
  {
    name: 'Mischka',
    hex: '#D1D2DD',
    rgb: { r: 209, g: 210, b: 221 }
  },
  {
    name: 'Mist Gray',
    hex: '#C4C4BC',
    rgb: { r: 196, g: 196, b: 188 }
  },
  {
    name: 'Mobster',
    hex: '#7F7589',
    rgb: { r: 127, g: 117, b: 137 }
  },
  {
    name: 'Moccaccino',
    hex: '#6E1D14',
    rgb: { r: 110, g: 29, b: 20 }
  },
  { name: 'Mocha', hex: '#782D19', rgb: { r: 120, g: 45, b: 25 } },
  { name: 'Mojo', hex: '#C04737', rgb: { r: 192, g: 71, b: 55 } },
  {
    name: 'Mona Lisa',
    hex: '#FFA194',
    rgb: { r: 255, g: 161, b: 148 }
  },
  { name: 'Monarch', hex: '#8B0723', rgb: { r: 139, g: 7, b: 35 } },
  { name: 'Mondo', hex: '#4A3C30', rgb: { r: 74, g: 60, b: 48 } },
  {
    name: 'Mongoose',
    hex: '#B5A27F',
    rgb: { r: 181, g: 162, b: 127 }
  },
  {
    name: 'Monsoon',
    hex: '#8A8389',
    rgb: { r: 138, g: 131, b: 137 }
  },
  {
    name: 'Monte Carlo',
    hex: '#83D0C6',
    rgb: { r: 131, g: 208, b: 198 }
  },
  { name: 'Monza', hex: '#C7031E', rgb: { r: 199, g: 3, b: 30 } },
  {
    name: 'Moody Blue',
    hex: '#7F76D3',
    rgb: { r: 127, g: 118, b: 211 }
  },
  {
    name: 'Moon Glow',
    hex: '#FCFEDA',
    rgb: { r: 252, g: 254, b: 218 }
  },
  {
    name: 'Moon Mist',
    hex: '#DCDDCC',
    rgb: { r: 220, g: 221, b: 204 }
  },
  {
    name: 'Moon Raker',
    hex: '#D6CEF6',
    rgb: { r: 214, g: 206, b: 246 }
  },
  {
    name: 'Morning Glory',
    hex: '#9EDEE0',
    rgb: { r: 158, g: 222, b: 224 }
  },
  {
    name: 'Morocco Brown',
    hex: '#441D00',
    rgb: { r: 68, g: 29, b: 0 }
  },
  { name: 'Mortar', hex: '#504351', rgb: { r: 80, g: 67, b: 81 } },
  { name: 'Mosque', hex: '#036A6E', rgb: { r: 3, g: 106, b: 110 } },
  {
    name: 'Moss Green',
    hex: '#ADDFAD',
    rgb: { r: 173, g: 223, b: 173 }
  },
  {
    name: 'Mountain Meadow',
    hex: '#1AB385',
    rgb: { r: 26, g: 179, b: 133 }
  },
  {
    name: 'Mountain Mist',
    hex: '#959396',
    rgb: { r: 149, g: 147, b: 150 }
  },
  {
    name: 'Mountbatten Pink',
    hex: '#997A8D',
    rgb: { r: 153, g: 122, b: 141 }
  },
  {
    name: 'Muddy Waters',
    hex: '#B78E5C',
    rgb: { r: 183, g: 142, b: 92 }
  },
  {
    name: 'Muesli',
    hex: '#AA8B5B',
    rgb: { r: 170, g: 139, b: 91 }
  },
  {
    name: 'Mulberry',
    hex: '#C54B8C',
    rgb: { r: 197, g: 75, b: 140 }
  },
  {
    name: 'Mulberry Wood',
    hex: '#5C0536',
    rgb: { r: 92, g: 5, b: 54 }
  },
  {
    name: 'Mule Fawn',
    hex: '#8C472F',
    rgb: { r: 140, g: 71, b: 47 }
  },
  {
    name: 'Mulled Wine',
    hex: '#4E4562',
    rgb: { r: 78, g: 69, b: 98 }
  },
  {
    name: 'Mustard',
    hex: '#FFDB58',
    rgb: { r: 255, g: 219, b: 88 }
  },
  {
    name: 'My Pink',
    hex: '#D69188',
    rgb: { r: 214, g: 145, b: 136 }
  },
  {
    name: 'My Sin',
    hex: '#FFB31F',
    rgb: { r: 255, g: 179, b: 31 }
  },
  {
    name: 'Mystic',
    hex: '#E2EBED',
    rgb: { r: 226, g: 235, b: 237 }
  },
  { name: 'Nandor', hex: '#4B5D52', rgb: { r: 75, g: 93, b: 82 } },
  { name: 'Napa', hex: '#ACA494', rgb: { r: 172, g: 164, b: 148 } },
  {
    name: 'Narvik',
    hex: '#EDF9F1',
    rgb: { r: 237, g: 249, b: 241 }
  },
  {
    name: 'Natural Gray',
    hex: '#8B8680',
    rgb: { r: 139, g: 134, b: 128 }
  },
  {
    name: 'Navajo White',
    hex: '#FFDEAD',
    rgb: { r: 255, g: 222, b: 173 }
  },
  {
    name: 'Navy Blue',
    hex: '#000080',
    rgb: { r: 0, g: 0, b: 128 }
  },
  {
    name: 'Nebula',
    hex: '#CBDBD6',
    rgb: { r: 203, g: 219, b: 214 }
  },
  {
    name: 'Negroni',
    hex: '#FFE2C5',
    rgb: { r: 255, g: 226, b: 197 }
  },
  {
    name: 'Neon Carrot',
    hex: '#FF9933',
    rgb: { r: 255, g: 153, b: 51 }
  },
  {
    name: 'Nepal',
    hex: '#8EABC1',
    rgb: { r: 142, g: 171, b: 193 }
  },
  {
    name: 'Neptune',
    hex: '#7CB7BB',
    rgb: { r: 124, g: 183, b: 187 }
  },
  { name: 'Nero', hex: '#140600', rgb: { r: 20, g: 6, b: 0 } },
  {
    name: 'Nevada',
    hex: '#646E75',
    rgb: { r: 100, g: 110, b: 117 }
  },
  {
    name: 'New Orleans',
    hex: '#F3D69D',
    rgb: { r: 243, g: 214, b: 157 }
  },
  {
    name: 'New York Pink',
    hex: '#D7837F',
    rgb: { r: 215, g: 131, b: 127 }
  },
  {
    name: 'Niagara',
    hex: '#06A189',
    rgb: { r: 6, g: 161, b: 137 }
  },
  {
    name: 'Night Rider',
    hex: '#1F120F',
    rgb: { r: 31, g: 18, b: 15 }
  },
  {
    name: 'Night Shadz',
    hex: '#AA375A',
    rgb: { r: 170, g: 55, b: 90 }
  },
  {
    name: 'Nile Blue',
    hex: '#193751',
    rgb: { r: 25, g: 55, b: 81 }
  },
  {
    name: 'Nobel',
    hex: '#B7B1B1',
    rgb: { r: 183, g: 177, b: 177 }
  },
  {
    name: 'Nomad',
    hex: '#BAB1A2',
    rgb: { r: 186, g: 177, b: 162 }
  },
  {
    name: 'Norway',
    hex: '#A8BD9F',
    rgb: { r: 168, g: 189, b: 159 }
  },
  {
    name: 'Nugget',
    hex: '#C59922',
    rgb: { r: 197, g: 153, b: 34 }
  },
  { name: 'Nutmeg', hex: '#81422C', rgb: { r: 129, g: 66, b: 44 } },
  {
    name: 'Nutmeg Wood Finish',
    hex: '#683600',
    rgb: { r: 104, g: 54, b: 0 }
  },
  {
    name: 'Oasis',
    hex: '#FEEFCE',
    rgb: { r: 254, g: 239, b: 206 }
  },
  {
    name: 'Observatory',
    hex: '#02866F',
    rgb: { r: 2, g: 134, b: 111 }
  },
  {
    name: 'Ocean Green',
    hex: '#41AA78',
    rgb: { r: 65, g: 170, b: 120 }
  },
  { name: 'Ochre', hex: '#CC7722', rgb: { r: 204, g: 119, b: 34 } },
  {
    name: 'Off Green',
    hex: '#E6F8F3',
    rgb: { r: 230, g: 248, b: 243 }
  },
  {
    name: 'Off Yellow',
    hex: '#FEF9E3',
    rgb: { r: 254, g: 249, b: 227 }
  },
  { name: 'Oil', hex: '#281E15', rgb: { r: 40, g: 30, b: 21 } },
  {
    name: 'Old Brick',
    hex: '#901E1E',
    rgb: { r: 144, g: 30, b: 30 }
  },
  {
    name: 'Old Copper',
    hex: '#724A2F',
    rgb: { r: 114, g: 74, b: 47 }
  },
  {
    name: 'Old Gold',
    hex: '#CFB53B',
    rgb: { r: 207, g: 181, b: 59 }
  },
  {
    name: 'Old Lace',
    hex: '#FDF5E6',
    rgb: { r: 253, g: 245, b: 230 }
  },
  {
    name: 'Old Lavender',
    hex: '#796878',
    rgb: { r: 121, g: 104, b: 120 }
  },
  {
    name: 'Old Rose',
    hex: '#C08081',
    rgb: { r: 192, g: 128, b: 129 }
  },
  { name: 'Olive', hex: '#808000', rgb: { r: 128, g: 128, b: 0 } },
  {
    name: 'Olive Drab',
    hex: '#6B8E23',
    rgb: { r: 107, g: 142, b: 35 }
  },
  {
    name: 'Olive Green',
    hex: '#B5B35C',
    rgb: { r: 181, g: 179, b: 92 }
  },
  {
    name: 'Olive Haze',
    hex: '#8B8470',
    rgb: { r: 139, g: 132, b: 112 }
  },
  {
    name: 'Olivetone',
    hex: '#716E10',
    rgb: { r: 113, g: 110, b: 16 }
  },
  {
    name: 'Olivine',
    hex: '#9AB973',
    rgb: { r: 154, g: 185, b: 115 }
  },
  {
    name: 'Onahau',
    hex: '#CDF4FF',
    rgb: { r: 205, g: 244, b: 255 }
  },
  { name: 'Onion', hex: '#2F270E', rgb: { r: 47, g: 39, b: 14 } },
  { name: 'Opal', hex: '#A9C6C2', rgb: { r: 169, g: 198, b: 194 } },
  {
    name: 'Opium',
    hex: '#8E6F70',
    rgb: { r: 142, g: 111, b: 112 }
  },
  {
    name: 'Oracle',
    hex: '#377475',
    rgb: { r: 55, g: 116, b: 117 }
  },
  {
    name: 'Orange',
    hex: '#FF681F',
    rgb: { r: 255, g: 104, b: 31 }
  },
  {
    name: 'Orange Peel',
    hex: '#FFA000',
    rgb: { r: 255, g: 160, b: 0 }
  },
  {
    name: 'Orange Roughy',
    hex: '#C45719',
    rgb: { r: 196, g: 87, b: 25 }
  },
  {
    name: 'Orange White',
    hex: '#FEFCED',
    rgb: { r: 254, g: 252, b: 237 }
  },
  {
    name: 'Orchid',
    hex: '#DA70D6',
    rgb: { r: 218, g: 112, b: 214 }
  },
  {
    name: 'Orchid White',
    hex: '#FFFDF3',
    rgb: { r: 255, g: 253, b: 243 }
  },
  { name: 'Oregon', hex: '#9B4703', rgb: { r: 155, g: 71, b: 3 } },
  { name: 'Orient', hex: '#015E85', rgb: { r: 1, g: 94, b: 133 } },
  {
    name: 'Oriental Pink',
    hex: '#C69191',
    rgb: { r: 198, g: 145, b: 145 }
  },
  {
    name: 'Orinoco',
    hex: '#F3FBD4',
    rgb: { r: 243, g: 251, b: 212 }
  },
  {
    name: 'Oslo Gray',
    hex: '#878D91',
    rgb: { r: 135, g: 141, b: 145 }
  },
  {
    name: 'Ottoman',
    hex: '#E9F8ED',
    rgb: { r: 233, g: 248, b: 237 }
  },
  {
    name: 'Outer Space',
    hex: '#2D383A',
    rgb: { r: 45, g: 56, b: 58 }
  },
  {
    name: 'Outrageous Orange',
    hex: '#FF6037',
    rgb: { r: 255, g: 96, b: 55 }
  },
  {
    name: 'Oxford Blue',
    hex: '#384555',
    rgb: { r: 56, g: 69, b: 85 }
  },
  {
    name: 'Oxley',
    hex: '#779E86',
    rgb: { r: 119, g: 158, b: 134 }
  },
  {
    name: 'Oyster Bay',
    hex: '#DAFAFF',
    rgb: { r: 218, g: 250, b: 255 }
  },
  {
    name: 'Oyster Pink',
    hex: '#E9CECD',
    rgb: { r: 233, g: 206, b: 205 }
  },
  { name: 'Paarl', hex: '#A65529', rgb: { r: 166, g: 85, b: 41 } },
  { name: 'Pablo', hex: '#776F61', rgb: { r: 119, g: 111, b: 97 } },
  {
    name: 'Pacific Blue',
    hex: '#009DC4',
    rgb: { r: 0, g: 157, b: 196 }
  },
  {
    name: 'Pacifika',
    hex: '#778120',
    rgb: { r: 119, g: 129, b: 32 }
  },
  { name: 'Paco', hex: '#411F10', rgb: { r: 65, g: 31, b: 16 } },
  {
    name: 'Padua',
    hex: '#ADE6C4',
    rgb: { r: 173, g: 230, b: 196 }
  },
  {
    name: 'Pale Canary',
    hex: '#FFFF99',
    rgb: { r: 255, g: 255, b: 153 }
  },
  {
    name: 'Pale Leaf',
    hex: '#C0D3B9',
    rgb: { r: 192, g: 211, b: 185 }
  },
  {
    name: 'Pale Oyster',
    hex: '#988D77',
    rgb: { r: 152, g: 141, b: 119 }
  },
  {
    name: 'Pale Prim',
    hex: '#FDFEB8',
    rgb: { r: 253, g: 254, b: 184 }
  },
  {
    name: 'Pale Rose',
    hex: '#FFE1F2',
    rgb: { r: 255, g: 225, b: 242 }
  },
  {
    name: 'Pale Sky',
    hex: '#6E7783',
    rgb: { r: 110, g: 119, b: 131 }
  },
  {
    name: 'Pale Slate',
    hex: '#C3BFC1',
    rgb: { r: 195, g: 191, b: 193 }
  },
  {
    name: 'Palm Green',
    hex: '#09230F',
    rgb: { r: 9, g: 35, b: 15 }
  },
  {
    name: 'Palm Leaf',
    hex: '#19330E',
    rgb: { r: 25, g: 51, b: 14 }
  },
  {
    name: 'Pampas',
    hex: '#F4F2EE',
    rgb: { r: 244, g: 242, b: 238 }
  },
  {
    name: 'Panache',
    hex: '#EAF6EE',
    rgb: { r: 234, g: 246, b: 238 }
  },
  {
    name: 'Pancho',
    hex: '#EDCDAB',
    rgb: { r: 237, g: 205, b: 171 }
  },
  {
    name: 'Papaya Whip',
    hex: '#FFEFD5',
    rgb: { r: 255, g: 239, b: 213 }
  },
  { name: 'Paprika', hex: '#8D0226', rgb: { r: 141, g: 2, b: 38 } },
  {
    name: 'Paradiso',
    hex: '#317D82',
    rgb: { r: 49, g: 125, b: 130 }
  },
  {
    name: 'Parchment',
    hex: '#F1E9D2',
    rgb: { r: 241, g: 233, b: 210 }
  },
  {
    name: 'Paris Daisy',
    hex: '#FFF46E',
    rgb: { r: 255, g: 244, b: 110 }
  },
  { name: 'Paris M', hex: '#26056A', rgb: { r: 38, g: 5, b: 106 } },
  {
    name: 'Paris White',
    hex: '#CADCD4',
    rgb: { r: 202, g: 220, b: 212 }
  },
  { name: 'Parsley', hex: '#134F19', rgb: { r: 19, g: 79, b: 25 } },
  {
    name: 'Pastel Green',
    hex: '#77DD77',
    rgb: { r: 119, g: 221, b: 119 }
  },
  {
    name: 'Pastel Pink',
    hex: '#FFD1DC',
    rgb: { r: 255, g: 209, b: 220 }
  },
  {
    name: 'Patina',
    hex: '#639A8F',
    rgb: { r: 99, g: 154, b: 143 }
  },
  {
    name: 'Pattens Blue',
    hex: '#DEF5FF',
    rgb: { r: 222, g: 245, b: 255 }
  },
  { name: 'Paua', hex: '#260368', rgb: { r: 38, g: 3, b: 104 } },
  {
    name: 'Pavlova',
    hex: '#D7C498',
    rgb: { r: 215, g: 196, b: 152 }
  },
  {
    name: 'Peach',
    hex: '#FFE5B4',
    rgb: { r: 255, g: 229, b: 180 }
  },
  {
    name: 'Peach Cream',
    hex: '#FFF0DB',
    rgb: { r: 255, g: 240, b: 219 }
  },
  {
    name: 'Peach Orange',
    hex: '#FFCC99',
    rgb: { r: 255, g: 204, b: 153 }
  },
  {
    name: 'Peach Schnapps',
    hex: '#FFDCD6',
    rgb: { r: 255, g: 220, b: 214 }
  },
  {
    name: 'Peach Yellow',
    hex: '#FADFAD',
    rgb: { r: 250, g: 223, b: 173 }
  },
  { name: 'Peanut', hex: '#782F16', rgb: { r: 120, g: 47, b: 22 } },
  { name: 'Pear', hex: '#D1E231', rgb: { r: 209, g: 226, b: 49 } },
  {
    name: 'Pearl Bush',
    hex: '#E8E0D5',
    rgb: { r: 232, g: 224, b: 213 }
  },
  {
    name: 'Pearl Lusta',
    hex: '#FCF4DC',
    rgb: { r: 252, g: 244, b: 220 }
  },
  { name: 'Peat', hex: '#716B56', rgb: { r: 113, g: 107, b: 86 } },
  {
    name: 'Pelorous',
    hex: '#3EABBF',
    rgb: { r: 62, g: 171, b: 191 }
  },
  {
    name: 'Peppermint',
    hex: '#E3F5E1',
    rgb: { r: 227, g: 245, b: 225 }
  },
  {
    name: 'Perano',
    hex: '#A9BEF2',
    rgb: { r: 169, g: 190, b: 242 }
  },
  {
    name: 'Perfume',
    hex: '#D0BEF8',
    rgb: { r: 208, g: 190, b: 248 }
  },
  {
    name: 'Periglacial Blue',
    hex: '#E1E6D6',
    rgb: { r: 225, g: 230, b: 214 }
  },
  {
    name: 'Periwinkle',
    hex: '#CCCCFF',
    rgb: { r: 204, g: 204, b: 255 }
  },
  {
    name: 'Periwinkle Gray',
    hex: '#C3CDE6',
    rgb: { r: 195, g: 205, b: 230 }
  },
  {
    name: 'Persian Blue',
    hex: '#1C39BB',
    rgb: { r: 28, g: 57, b: 187 }
  },
  {
    name: 'Persian Green',
    hex: '#00A693',
    rgb: { r: 0, g: 166, b: 147 }
  },
  {
    name: 'Persian Indigo',
    hex: '#32127A',
    rgb: { r: 50, g: 18, b: 122 }
  },
  {
    name: 'Persian Pink',
    hex: '#F77FBE',
    rgb: { r: 247, g: 127, b: 190 }
  },
  {
    name: 'Persian Plum',
    hex: '#701C1C',
    rgb: { r: 112, g: 28, b: 28 }
  },
  {
    name: 'Persian Red',
    hex: '#CC3333',
    rgb: { r: 204, g: 51, b: 51 }
  },
  {
    name: 'Persian Rose',
    hex: '#FE28A2',
    rgb: { r: 254, g: 40, b: 162 }
  },
  {
    name: 'Persimmon',
    hex: '#FF6B53',
    rgb: { r: 255, g: 107, b: 83 }
  },
  {
    name: 'Peru Tan',
    hex: '#7F3A02',
    rgb: { r: 127, g: 58, b: 2 }
  },
  { name: 'Pesto', hex: '#7C7631', rgb: { r: 124, g: 118, b: 49 } },
  {
    name: 'Petite Orchid',
    hex: '#DB9690',
    rgb: { r: 219, g: 150, b: 144 }
  },
  {
    name: 'Pewter',
    hex: '#96A8A1',
    rgb: { r: 150, g: 168, b: 161 }
  },
  {
    name: 'Pharlap',
    hex: '#A3807B',
    rgb: { r: 163, g: 128, b: 123 }
  },
  {
    name: 'Picasso',
    hex: '#FFF39D',
    rgb: { r: 255, g: 243, b: 157 }
  },
  {
    name: 'Pickled Bean',
    hex: '#6E4826',
    rgb: { r: 110, g: 72, b: 38 }
  },
  {
    name: 'Pickled Bluewood',
    hex: '#314459',
    rgb: { r: 49, g: 68, b: 89 }
  },
  {
    name: 'Picton Blue',
    hex: '#45B1E8',
    rgb: { r: 69, g: 177, b: 232 }
  },
  {
    name: 'Pig Pink',
    hex: '#FDD7E4',
    rgb: { r: 253, g: 215, b: 228 }
  },
  {
    name: 'Pigeon Post',
    hex: '#AFBDD9',
    rgb: { r: 175, g: 189, b: 217 }
  },
  {
    name: 'Pigment Indigo',
    hex: '#4B0082',
    rgb: { r: 75, g: 0, b: 130 }
  },
  {
    name: 'Pine Cone',
    hex: '#6D5E54',
    rgb: { r: 109, g: 94, b: 84 }
  },
  {
    name: 'Pine Glade',
    hex: '#C7CD90',
    rgb: { r: 199, g: 205, b: 144 }
  },
  {
    name: 'Pine Green',
    hex: '#01796F',
    rgb: { r: 1, g: 121, b: 111 }
  },
  {
    name: 'Pine Tree',
    hex: '#171F04',
    rgb: { r: 23, g: 31, b: 4 }
  },
  { name: 'Pink', hex: '#FFC0CB', rgb: { r: 255, g: 192, b: 203 } },
  {
    name: 'Pink Flamingo',
    hex: '#FF66FF',
    rgb: { r: 255, g: 102, b: 255 }
  },
  {
    name: 'Pink Flare',
    hex: '#E1C0C8',
    rgb: { r: 225, g: 192, b: 200 }
  },
  {
    name: 'Pink Lace',
    hex: '#FFDDF4',
    rgb: { r: 255, g: 221, b: 244 }
  },
  {
    name: 'Pink Lady',
    hex: '#FFF1D8',
    rgb: { r: 255, g: 241, b: 216 }
  },
  {
    name: 'Pink Salmon',
    hex: '#FF91A4',
    rgb: { r: 255, g: 145, b: 164 }
  },
  {
    name: 'Pink Swan',
    hex: '#BEB5B7',
    rgb: { r: 190, g: 181, b: 183 }
  },
  { name: 'Piper', hex: '#C96323', rgb: { r: 201, g: 99, b: 35 } },
  { name: 'Pipi', hex: '#FEF4CC', rgb: { r: 254, g: 244, b: 204 } },
  {
    name: 'Pippin',
    hex: '#FFE1DF',
    rgb: { r: 255, g: 225, b: 223 }
  },
  {
    name: 'Pirate Gold',
    hex: '#BA7F03',
    rgb: { r: 186, g: 127, b: 3 }
  },
  {
    name: 'Pistachio',
    hex: '#9DC209',
    rgb: { r: 157, g: 194, b: 9 }
  },
  {
    name: 'Pixie Green',
    hex: '#C0D8B6',
    rgb: { r: 192, g: 216, b: 182 }
  },
  { name: 'Pizazz', hex: '#FF9000', rgb: { r: 255, g: 144, b: 0 } },
  { name: 'Pizza', hex: '#C99415', rgb: { r: 201, g: 148, b: 21 } },
  {
    name: 'Plantation',
    hex: '#27504B',
    rgb: { r: 39, g: 80, b: 75 }
  },
  { name: 'Plum', hex: '#843179', rgb: { r: 132, g: 49, b: 121 } },
  {
    name: 'Pohutukawa',
    hex: '#8F021C',
    rgb: { r: 143, g: 2, b: 28 }
  },
  {
    name: 'Polar',
    hex: '#E5F9F6',
    rgb: { r: 229, g: 249, b: 246 }
  },
  {
    name: 'Polo Blue',
    hex: '#8DA8CC',
    rgb: { r: 141, g: 168, b: 204 }
  },
  {
    name: 'Pomegranate',
    hex: '#F34723',
    rgb: { r: 243, g: 71, b: 35 }
  },
  {
    name: 'Pompadour',
    hex: '#660045',
    rgb: { r: 102, g: 0, b: 69 }
  },
  {
    name: 'Porcelain',
    hex: '#EFF2F3',
    rgb: { r: 239, g: 242, b: 243 }
  },
  {
    name: 'Porsche',
    hex: '#EAAE69',
    rgb: { r: 234, g: 174, b: 105 }
  },
  {
    name: 'Port Gore',
    hex: '#251F4F',
    rgb: { r: 37, g: 31, b: 79 }
  },
  {
    name: 'Portafino',
    hex: '#FFFFB4',
    rgb: { r: 255, g: 255, b: 180 }
  },
  {
    name: 'Portage',
    hex: '#8B9FEE',
    rgb: { r: 139, g: 159, b: 238 }
  },
  {
    name: 'Portica',
    hex: '#F9E663',
    rgb: { r: 249, g: 230, b: 99 }
  },
  {
    name: 'Pot Pourri',
    hex: '#F5E7E2',
    rgb: { r: 245, g: 231, b: 226 }
  },
  {
    name: 'Potters Clay',
    hex: '#8C5738',
    rgb: { r: 140, g: 87, b: 56 }
  },
  {
    name: 'Powder Ash',
    hex: '#BCC9C2',
    rgb: { r: 188, g: 201, b: 194 }
  },
  {
    name: 'Powder Blue',
    hex: '#B0E0E6',
    rgb: { r: 176, g: 224, b: 230 }
  },
  {
    name: 'Prairie Sand',
    hex: '#9A3820',
    rgb: { r: 154, g: 56, b: 32 }
  },
  {
    name: 'Prelude',
    hex: '#D0C0E5',
    rgb: { r: 208, g: 192, b: 229 }
  },
  { name: 'Prim', hex: '#F0E2EC', rgb: { r: 240, g: 226, b: 236 } },
  {
    name: 'Primrose',
    hex: '#EDEA99',
    rgb: { r: 237, g: 234, b: 153 }
  },
  {
    name: 'Provincial Pink',
    hex: '#FEF5F1',
    rgb: { r: 254, g: 245, b: 241 }
  },
  {
    name: 'Prussian Blue',
    hex: '#003153',
    rgb: { r: 0, g: 49, b: 83 }
  },
  { name: 'Puce', hex: '#CC8899', rgb: { r: 204, g: 136, b: 153 } },
  { name: 'Pueblo', hex: '#7D2C14', rgb: { r: 125, g: 44, b: 20 } },
  {
    name: 'Puerto Rico',
    hex: '#3FC1AA',
    rgb: { r: 63, g: 193, b: 170 }
  },
  {
    name: 'Pumice',
    hex: '#C2CAC4',
    rgb: { r: 194, g: 202, b: 196 }
  },
  {
    name: 'Pumpkin',
    hex: '#FF7518',
    rgb: { r: 255, g: 117, b: 24 }
  },
  {
    name: 'Pumpkin Skin',
    hex: '#B1610B',
    rgb: { r: 177, g: 97, b: 11 }
  },
  { name: 'Punch', hex: '#DC4333', rgb: { r: 220, g: 67, b: 51 } },
  { name: 'Punga', hex: '#4D3D14', rgb: { r: 77, g: 61, b: 20 } },
  { name: 'Purple', hex: '#660099', rgb: { r: 102, g: 0, b: 153 } },
  {
    name: 'Purple Heart',
    hex: '#652DC1',
    rgb: { r: 101, g: 45, b: 193 }
  },
  {
    name: "Purple Mountain's Majesty",
    hex: '#9678B6',
    rgb: { r: 150, g: 120, b: 182 }
  },
  {
    name: 'Purple Pizzazz',
    hex: '#FF00CC',
    rgb: { r: 255, g: 0, b: 204 }
  },
  {
    name: 'Putty',
    hex: '#E7CD8C',
    rgb: { r: 231, g: 205, b: 140 }
  },
  {
    name: 'Quarter Pearl Lusta',
    hex: '#FFFDF4',
    rgb: { r: 255, g: 253, b: 244 }
  },
  {
    name: 'Quarter Spanish White',
    hex: '#F7F2E1',
    rgb: { r: 247, g: 242, b: 225 }
  },
  {
    name: 'Quicksand',
    hex: '#BD978E',
    rgb: { r: 189, g: 151, b: 142 }
  },
  {
    name: 'Quill Gray',
    hex: '#D6D6D1',
    rgb: { r: 214, g: 214, b: 209 }
  },
  { name: 'Quincy', hex: '#623F2D', rgb: { r: 98, g: 63, b: 45 } },
  {
    name: 'Racing Green',
    hex: '#0C1911',
    rgb: { r: 12, g: 25, b: 17 }
  },
  {
    name: 'Radical Red',
    hex: '#FF355E',
    rgb: { r: 255, g: 53, b: 94 }
  },
  {
    name: 'Raffia',
    hex: '#EADAB8',
    rgb: { r: 234, g: 218, b: 184 }
  },
  {
    name: 'Rainee',
    hex: '#B9C8AC',
    rgb: { r: 185, g: 200, b: 172 }
  },
  {
    name: 'Rajah',
    hex: '#F7B668',
    rgb: { r: 247, g: 182, b: 104 }
  },
  {
    name: 'Rangitoto',
    hex: '#2E3222',
    rgb: { r: 46, g: 50, b: 34 }
  },
  {
    name: 'Rangoon Green',
    hex: '#1C1E13',
    rgb: { r: 28, g: 30, b: 19 }
  },
  {
    name: 'Raven',
    hex: '#727B89',
    rgb: { r: 114, g: 123, b: 137 }
  },
  {
    name: 'Raw Sienna',
    hex: '#D27D46',
    rgb: { r: 210, g: 125, b: 70 }
  },
  {
    name: 'Raw Umber',
    hex: '#734A12',
    rgb: { r: 115, g: 74, b: 18 }
  },
  {
    name: 'Razzle Dazzle Rose',
    hex: '#FF33CC',
    rgb: { r: 255, g: 51, b: 204 }
  },
  {
    name: 'Razzmatazz',
    hex: '#E30B5C',
    rgb: { r: 227, g: 11, b: 92 }
  },
  { name: 'Rebel', hex: '#3C1206', rgb: { r: 60, g: 18, b: 6 } },
  { name: 'Red', hex: '#FF0000', rgb: { r: 255, g: 0, b: 0 } },
  {
    name: 'Red Beech',
    hex: '#7B3801',
    rgb: { r: 123, g: 56, b: 1 }
  },
  {
    name: 'Red Berry',
    hex: '#8E0000',
    rgb: { r: 142, g: 0, b: 0 }
  },
  {
    name: 'Red Damask',
    hex: '#DA6A41',
    rgb: { r: 218, g: 106, b: 65 }
  },
  {
    name: 'Red Devil',
    hex: '#860111',
    rgb: { r: 134, g: 1, b: 17 }
  },
  {
    name: 'Red Orange',
    hex: '#FF3F34',
    rgb: { r: 255, g: 63, b: 52 }
  },
  {
    name: 'Red Oxide',
    hex: '#6E0902',
    rgb: { r: 110, g: 9, b: 2 }
  },
  {
    name: 'Red Ribbon',
    hex: '#ED0A3F',
    rgb: { r: 237, g: 10, b: 63 }
  },
  {
    name: 'Red Robin',
    hex: '#80341F',
    rgb: { r: 128, g: 52, b: 31 }
  },
  {
    name: 'Red Stage',
    hex: '#D05F04',
    rgb: { r: 208, g: 95, b: 4 }
  },
  {
    name: 'Red Violet',
    hex: '#C71585',
    rgb: { r: 199, g: 21, b: 133 }
  },
  { name: 'Redwood', hex: '#5D1E0F', rgb: { r: 93, g: 30, b: 15 } },
  { name: 'Reef', hex: '#C9FFA2', rgb: { r: 201, g: 255, b: 162 } },
  {
    name: 'Reef Gold',
    hex: '#9F821C',
    rgb: { r: 159, g: 130, b: 28 }
  },
  {
    name: 'Regal Blue',
    hex: '#013F6A',
    rgb: { r: 1, g: 63, b: 106 }
  },
  {
    name: 'Regent Gray',
    hex: '#86949F',
    rgb: { r: 134, g: 148, b: 159 }
  },
  {
    name: 'Regent St Blue',
    hex: '#AAD6E6',
    rgb: { r: 170, g: 214, b: 230 }
  },
  { name: 'Remy', hex: '#FEEBF3', rgb: { r: 254, g: 235, b: 243 } },
  {
    name: 'Reno Sand',
    hex: '#A86515',
    rgb: { r: 168, g: 101, b: 21 }
  },
  {
    name: 'Resolution Blue',
    hex: '#002387',
    rgb: { r: 0, g: 35, b: 135 }
  },
  {
    name: 'Revolver',
    hex: '#2C1632',
    rgb: { r: 44, g: 22, b: 50 }
  },
  { name: 'Rhino', hex: '#2E3F62', rgb: { r: 46, g: 63, b: 98 } },
  {
    name: 'Rice Cake',
    hex: '#FFFEF0',
    rgb: { r: 255, g: 254, b: 240 }
  },
  {
    name: 'Rice Flower',
    hex: '#EEFFE2',
    rgb: { r: 238, g: 255, b: 226 }
  },
  {
    name: 'Rich Gold',
    hex: '#A85307',
    rgb: { r: 168, g: 83, b: 7 }
  },
  {
    name: 'Rio Grande',
    hex: '#BBD009',
    rgb: { r: 187, g: 208, b: 9 }
  },
  {
    name: 'Ripe Lemon',
    hex: '#F4D81C',
    rgb: { r: 244, g: 216, b: 28 }
  },
  {
    name: 'Ripe Plum',
    hex: '#410056',
    rgb: { r: 65, g: 0, b: 86 }
  },
  {
    name: 'Riptide',
    hex: '#8BE6D8',
    rgb: { r: 139, g: 230, b: 216 }
  },
  {
    name: 'River Bed',
    hex: '#434C59',
    rgb: { r: 67, g: 76, b: 89 }
  },
  {
    name: 'Rob Roy',
    hex: '#EAC674',
    rgb: { r: 234, g: 198, b: 116 }
  },
  {
    name: "Robin's Egg Blue",
    hex: '#00CCCC',
    rgb: { r: 0, g: 204, b: 204 }
  },
  { name: 'Rock', hex: '#4D3833', rgb: { r: 77, g: 56, b: 51 } },
  {
    name: 'Rock Blue',
    hex: '#9EB1CD',
    rgb: { r: 158, g: 177, b: 205 }
  },
  {
    name: 'Rock Spray',
    hex: '#BA450C',
    rgb: { r: 186, g: 69, b: 12 }
  },
  {
    name: 'Rodeo Dust',
    hex: '#C9B29B',
    rgb: { r: 201, g: 178, b: 155 }
  },
  {
    name: 'Rolling Stone',
    hex: '#747D83',
    rgb: { r: 116, g: 125, b: 131 }
  },
  { name: 'Roman', hex: '#DE6360', rgb: { r: 222, g: 99, b: 96 } },
  {
    name: 'Roman Coffee',
    hex: '#795D4C',
    rgb: { r: 121, g: 93, b: 76 }
  },
  {
    name: 'Romance',
    hex: '#FFFEFD',
    rgb: { r: 255, g: 254, b: 253 }
  },
  {
    name: 'Romantic',
    hex: '#FFD2B7',
    rgb: { r: 255, g: 210, b: 183 }
  },
  {
    name: 'Ronchi',
    hex: '#ECC54E',
    rgb: { r: 236, g: 197, b: 78 }
  },
  {
    name: 'Roof Terracotta',
    hex: '#A62F20',
    rgb: { r: 166, g: 47, b: 32 }
  },
  { name: 'Rope', hex: '#8E4D1E', rgb: { r: 142, g: 77, b: 30 } },
  { name: 'Rose', hex: '#FF007F', rgb: { r: 255, g: 0, b: 127 } },
  {
    name: 'Rose Bud',
    hex: '#FBB2A3',
    rgb: { r: 251, g: 178, b: 163 }
  },
  {
    name: 'Rose Bud Cherry',
    hex: '#800B47',
    rgb: { r: 128, g: 11, b: 71 }
  },
  {
    name: 'Rose Fog',
    hex: '#E7BCB4',
    rgb: { r: 231, g: 188, b: 180 }
  },
  {
    name: 'Rose Of Sharon',
    hex: '#BF5500',
    rgb: { r: 191, g: 85, b: 0 }
  },
  {
    name: 'Rose White',
    hex: '#FFF6F5',
    rgb: { r: 255, g: 246, b: 245 }
  },
  {
    name: 'Rosewood',
    hex: '#65000B',
    rgb: { r: 101, g: 0, b: 11 }
  },
  { name: 'Roti', hex: '#C6A84B', rgb: { r: 198, g: 168, b: 75 } },
  { name: 'Rouge', hex: '#A23B6C', rgb: { r: 162, g: 59, b: 108 } },
  {
    name: 'Royal Blue',
    hex: '#4169E1',
    rgb: { r: 65, g: 105, b: 225 }
  },
  {
    name: 'Royal Heath',
    hex: '#AB3472',
    rgb: { r: 171, g: 52, b: 114 }
  },
  {
    name: 'Royal Purple',
    hex: '#6B3FA0',
    rgb: { r: 107, g: 63, b: 160 }
  },
  { name: 'Rum', hex: '#796989', rgb: { r: 121, g: 105, b: 137 } },
  {
    name: 'Rum Swizzle',
    hex: '#F9F8E4',
    rgb: { r: 249, g: 248, b: 228 }
  },
  { name: 'Russet', hex: '#80461B', rgb: { r: 128, g: 70, b: 27 } },
  {
    name: 'Russett',
    hex: '#755A57',
    rgb: { r: 117, g: 90, b: 87 }
  },
  { name: 'Rust', hex: '#B7410E', rgb: { r: 183, g: 65, b: 14 } },
  {
    name: 'Rustic Red',
    hex: '#480404',
    rgb: { r: 72, g: 4, b: 4 }
  },
  {
    name: 'Rusty Nail',
    hex: '#86560A',
    rgb: { r: 134, g: 86, b: 10 }
  },
  { name: 'Saddle', hex: '#4C3024', rgb: { r: 76, g: 48, b: 36 } },
  {
    name: 'Saddle Brown',
    hex: '#583401',
    rgb: { r: 88, g: 52, b: 1 }
  },
  {
    name: 'Saffron',
    hex: '#F4C430',
    rgb: { r: 244, g: 196, b: 48 }
  },
  {
    name: 'Saffron Mango',
    hex: '#F9BF58',
    rgb: { r: 249, g: 191, b: 88 }
  },
  { name: 'Sage', hex: '#9EA587', rgb: { r: 158, g: 165, b: 135 } },
  {
    name: 'Sahara',
    hex: '#B7A214',
    rgb: { r: 183, g: 162, b: 20 }
  },
  {
    name: 'Sahara Sand',
    hex: '#F1E788',
    rgb: { r: 241, g: 231, b: 136 }
  },
  { name: 'Sail', hex: '#B8E0F9', rgb: { r: 184, g: 224, b: 249 } },
  { name: 'Salem', hex: '#097F4B', rgb: { r: 9, g: 127, b: 75 } },
  {
    name: 'Salmon',
    hex: '#FF8C69',
    rgb: { r: 255, g: 140, b: 105 }
  },
  {
    name: 'Salomie',
    hex: '#FEDB8D',
    rgb: { r: 254, g: 219, b: 141 }
  },
  {
    name: 'Salt Box',
    hex: '#685E6E',
    rgb: { r: 104, g: 94, b: 110 }
  },
  {
    name: 'Saltpan',
    hex: '#F1F7F2',
    rgb: { r: 241, g: 247, b: 242 }
  },
  { name: 'Sambuca', hex: '#3A2010', rgb: { r: 58, g: 32, b: 16 } },
  {
    name: 'San Felix',
    hex: '#0B6207',
    rgb: { r: 11, g: 98, b: 7 }
  },
  {
    name: 'San Juan',
    hex: '#304B6A',
    rgb: { r: 48, g: 75, b: 106 }
  },
  {
    name: 'San Marino',
    hex: '#456CAC',
    rgb: { r: 69, g: 108, b: 172 }
  },
  {
    name: 'Sand Dune',
    hex: '#826F65',
    rgb: { r: 130, g: 111, b: 101 }
  },
  {
    name: 'Sandal',
    hex: '#AA8D6F',
    rgb: { r: 170, g: 141, b: 111 }
  },
  {
    name: 'Sandrift',
    hex: '#AB917A',
    rgb: { r: 171, g: 145, b: 122 }
  },
  {
    name: 'Sandstone',
    hex: '#796D62',
    rgb: { r: 121, g: 109, b: 98 }
  },
  {
    name: 'Sandwisp',
    hex: '#F5E7A2',
    rgb: { r: 245, g: 231, b: 162 }
  },
  {
    name: 'Sandy Beach',
    hex: '#FFEAC8',
    rgb: { r: 255, g: 234, b: 200 }
  },
  {
    name: 'Sandy Brown',
    hex: '#F4A460',
    rgb: { r: 244, g: 164, b: 96 }
  },
  { name: 'Sangria', hex: '#92000A', rgb: { r: 146, g: 0, b: 10 } },
  {
    name: 'Sanguine Brown',
    hex: '#8D3D38',
    rgb: { r: 141, g: 61, b: 56 }
  },
  {
    name: 'Santa Fe',
    hex: '#B16D52',
    rgb: { r: 177, g: 109, b: 82 }
  },
  {
    name: 'Santas Gray',
    hex: '#9FA0B1',
    rgb: { r: 159, g: 160, b: 177 }
  },
  {
    name: 'Sapling',
    hex: '#DED4A4',
    rgb: { r: 222, g: 212, b: 164 }
  },
  {
    name: 'Sapphire',
    hex: '#2F519E',
    rgb: { r: 47, g: 81, b: 158 }
  },
  {
    name: 'Saratoga',
    hex: '#555B10',
    rgb: { r: 85, g: 91, b: 16 }
  },
  {
    name: 'Satin Linen',
    hex: '#E6E4D4',
    rgb: { r: 230, g: 228, b: 212 }
  },
  {
    name: 'Sauvignon',
    hex: '#FFF5F3',
    rgb: { r: 255, g: 245, b: 243 }
  },
  {
    name: 'Sazerac',
    hex: '#FFF4E0',
    rgb: { r: 255, g: 244, b: 224 }
  },
  {
    name: 'Scampi',
    hex: '#675FA6',
    rgb: { r: 103, g: 95, b: 166 }
  },
  {
    name: 'Scandal',
    hex: '#CFFAF4',
    rgb: { r: 207, g: 250, b: 244 }
  },
  { name: 'Scarlet', hex: '#FF2400', rgb: { r: 255, g: 36, b: 0 } },
  {
    name: 'Scarlet Gum',
    hex: '#431560',
    rgb: { r: 67, g: 21, b: 96 }
  },
  {
    name: 'Scarlett',
    hex: '#950015',
    rgb: { r: 149, g: 0, b: 21 }
  },
  {
    name: 'Scarpa Flow',
    hex: '#585562',
    rgb: { r: 88, g: 85, b: 98 }
  },
  {
    name: 'Schist',
    hex: '#A9B497',
    rgb: { r: 169, g: 180, b: 151 }
  },
  {
    name: 'School Bus Yellow',
    hex: '#FFD800',
    rgb: { r: 255, g: 216, b: 0 }
  },
  {
    name: 'Schooner',
    hex: '#8B847E',
    rgb: { r: 139, g: 132, b: 126 }
  },
  {
    name: 'Science Blue',
    hex: '#0066CC',
    rgb: { r: 0, g: 102, b: 204 }
  },
  {
    name: 'Scooter',
    hex: '#2EBFD4',
    rgb: { r: 46, g: 191, b: 212 }
  },
  {
    name: 'Scorpion',
    hex: '#695F62',
    rgb: { r: 105, g: 95, b: 98 }
  },
  {
    name: 'Scotch Mist',
    hex: '#FFFBDC',
    rgb: { r: 255, g: 251, b: 220 }
  },
  {
    name: "Screamin' Green",
    hex: '#66FF66',
    rgb: { r: 102, g: 255, b: 102 }
  },
  {
    name: 'Sea Buckthorn',
    hex: '#FBA129',
    rgb: { r: 251, g: 161, b: 41 }
  },
  {
    name: 'Sea Green',
    hex: '#2E8B57',
    rgb: { r: 46, g: 139, b: 87 }
  },
  {
    name: 'Sea Mist',
    hex: '#C5DBCA',
    rgb: { r: 197, g: 219, b: 202 }
  },
  {
    name: 'Sea Nymph',
    hex: '#78A39C',
    rgb: { r: 120, g: 163, b: 156 }
  },
  {
    name: 'Sea Pink',
    hex: '#ED989E',
    rgb: { r: 237, g: 152, b: 158 }
  },
  {
    name: 'Seagull',
    hex: '#80CCEA',
    rgb: { r: 128, g: 204, b: 234 }
  },
  {
    name: 'Seance',
    hex: '#731E8F',
    rgb: { r: 115, g: 30, b: 143 }
  },
  {
    name: 'Seashell',
    hex: '#F1F1F1',
    rgb: { r: 241, g: 241, b: 241 }
  },
  {
    name: 'Seashell Peach',
    hex: '#FFF5EE',
    rgb: { r: 255, g: 245, b: 238 }
  },
  { name: 'Seaweed', hex: '#1B2F11', rgb: { r: 27, g: 47, b: 17 } },
  {
    name: 'Selago',
    hex: '#F0EEFD',
    rgb: { r: 240, g: 238, b: 253 }
  },
  {
    name: 'Selective Yellow',
    hex: '#FFBA00',
    rgb: { r: 255, g: 186, b: 0 }
  },
  { name: 'Sepia', hex: '#704214', rgb: { r: 112, g: 66, b: 20 } },
  {
    name: 'Sepia Black',
    hex: '#2B0202',
    rgb: { r: 43, g: 2, b: 2 }
  },
  {
    name: 'Sepia Skin',
    hex: '#9E5B40',
    rgb: { r: 158, g: 91, b: 64 }
  },
  {
    name: 'Serenade',
    hex: '#FFF4E8',
    rgb: { r: 255, g: 244, b: 232 }
  },
  {
    name: 'Shadow',
    hex: '#837050',
    rgb: { r: 131, g: 112, b: 80 }
  },
  {
    name: 'Shadow Green',
    hex: '#9AC2B8',
    rgb: { r: 154, g: 194, b: 184 }
  },
  {
    name: 'Shady Lady',
    hex: '#AAA5A9',
    rgb: { r: 170, g: 165, b: 169 }
  },
  {
    name: 'Shakespeare',
    hex: '#4EABD1',
    rgb: { r: 78, g: 171, b: 209 }
  },
  {
    name: 'Shalimar',
    hex: '#FBFFBA',
    rgb: { r: 251, g: 255, b: 186 }
  },
  {
    name: 'Shamrock',
    hex: '#33CC99',
    rgb: { r: 51, g: 204, b: 153 }
  },
  { name: 'Shark', hex: '#25272C', rgb: { r: 37, g: 39, b: 44 } },
  {
    name: 'Sherpa Blue',
    hex: '#004950',
    rgb: { r: 0, g: 73, b: 80 }
  },
  {
    name: 'Sherwood Green',
    hex: '#02402C',
    rgb: { r: 2, g: 64, b: 44 }
  },
  {
    name: 'Shilo',
    hex: '#E8B9B3',
    rgb: { r: 232, g: 185, b: 179 }
  },
  {
    name: 'Shingle Fawn',
    hex: '#6B4E31',
    rgb: { r: 107, g: 78, b: 49 }
  },
  {
    name: 'Ship Cove',
    hex: '#788BBA',
    rgb: { r: 120, g: 139, b: 186 }
  },
  {
    name: 'Ship Gray',
    hex: '#3E3A44',
    rgb: { r: 62, g: 58, b: 68 }
  },
  { name: 'Shiraz', hex: '#B20931', rgb: { r: 178, g: 9, b: 49 } },
  {
    name: 'Shocking',
    hex: '#E292C0',
    rgb: { r: 226, g: 146, b: 192 }
  },
  {
    name: 'Shocking Pink',
    hex: '#FC0FC0',
    rgb: { r: 252, g: 15, b: 192 }
  },
  {
    name: 'Shuttle Gray',
    hex: '#5F6672',
    rgb: { r: 95, g: 102, b: 114 }
  },
  { name: 'Siam', hex: '#646A54', rgb: { r: 100, g: 106, b: 84 } },
  {
    name: 'Sidecar',
    hex: '#F3E7BB',
    rgb: { r: 243, g: 231, b: 187 }
  },
  { name: 'Silk', hex: '#BDB1A8', rgb: { r: 189, g: 177, b: 168 } },
  {
    name: 'Silver',
    hex: '#C0C0C0',
    rgb: { r: 192, g: 192, b: 192 }
  },
  {
    name: 'Silver Chalice',
    hex: '#ACACAC',
    rgb: { r: 172, g: 172, b: 172 }
  },
  {
    name: 'Silver Rust',
    hex: '#C9C0BB',
    rgb: { r: 201, g: 192, b: 187 }
  },
  {
    name: 'Silver Sand',
    hex: '#BFC1C2',
    rgb: { r: 191, g: 193, b: 194 }
  },
  {
    name: 'Silver Tree',
    hex: '#66B58F',
    rgb: { r: 102, g: 181, b: 143 }
  },
  {
    name: 'Sinbad',
    hex: '#9FD7D3',
    rgb: { r: 159, g: 215, b: 211 }
  },
  { name: 'Siren', hex: '#7A013A', rgb: { r: 122, g: 1, b: 58 } },
  {
    name: 'Sirocco',
    hex: '#718080',
    rgb: { r: 113, g: 128, b: 128 }
  },
  {
    name: 'Sisal',
    hex: '#D3CBBA',
    rgb: { r: 211, g: 203, b: 186 }
  },
  {
    name: 'Skeptic',
    hex: '#CAE6DA',
    rgb: { r: 202, g: 230, b: 218 }
  },
  {
    name: 'Sky Blue',
    hex: '#76D7EA',
    rgb: { r: 118, g: 215, b: 234 }
  },
  {
    name: 'Slate Gray',
    hex: '#708090',
    rgb: { r: 112, g: 128, b: 144 }
  },
  { name: 'Smalt', hex: '#003399', rgb: { r: 0, g: 51, b: 153 } },
  {
    name: 'Smalt Blue',
    hex: '#51808F',
    rgb: { r: 81, g: 128, b: 143 }
  },
  { name: 'Smoky', hex: '#605B73', rgb: { r: 96, g: 91, b: 115 } },
  {
    name: 'Snow Drift',
    hex: '#F7FAF7',
    rgb: { r: 247, g: 250, b: 247 }
  },
  {
    name: 'Snow Flurry',
    hex: '#E4FFD1',
    rgb: { r: 228, g: 255, b: 209 }
  },
  {
    name: 'Snowy Mint',
    hex: '#D6FFDB',
    rgb: { r: 214, g: 255, b: 219 }
  },
  {
    name: 'Snuff',
    hex: '#E2D8ED',
    rgb: { r: 226, g: 216, b: 237 }
  },
  {
    name: 'Soapstone',
    hex: '#FFFBF9',
    rgb: { r: 255, g: 251, b: 249 }
  },
  {
    name: 'Soft Amber',
    hex: '#D1C6B4',
    rgb: { r: 209, g: 198, b: 180 }
  },
  {
    name: 'Soft Peach',
    hex: '#F5EDEF',
    rgb: { r: 245, g: 237, b: 239 }
  },
  {
    name: 'Solid Pink',
    hex: '#893843',
    rgb: { r: 137, g: 56, b: 67 }
  },
  {
    name: 'Solitaire',
    hex: '#FEF8E2',
    rgb: { r: 254, g: 248, b: 226 }
  },
  {
    name: 'Solitude',
    hex: '#EAF6FF',
    rgb: { r: 234, g: 246, b: 255 }
  },
  { name: 'Sorbus', hex: '#FD7C07', rgb: { r: 253, g: 124, b: 7 } },
  {
    name: 'Sorrell Brown',
    hex: '#CEB98F',
    rgb: { r: 206, g: 185, b: 143 }
  },
  {
    name: 'Soya Bean',
    hex: '#6A6051',
    rgb: { r: 106, g: 96, b: 81 }
  },
  {
    name: 'Spanish Green',
    hex: '#819885',
    rgb: { r: 129, g: 152, b: 133 }
  },
  { name: 'Spectra', hex: '#2F5A57', rgb: { r: 47, g: 90, b: 87 } },
  { name: 'Spice', hex: '#6A442E', rgb: { r: 106, g: 68, b: 46 } },
  {
    name: 'Spicy Mix',
    hex: '#885342',
    rgb: { r: 136, g: 83, b: 66 }
  },
  {
    name: 'Spicy Mustard',
    hex: '#74640D',
    rgb: { r: 116, g: 100, b: 13 }
  },
  {
    name: 'Spicy Pink',
    hex: '#816E71',
    rgb: { r: 129, g: 110, b: 113 }
  },
  {
    name: 'Spindle',
    hex: '#B6D1EA',
    rgb: { r: 182, g: 209, b: 234 }
  },
  {
    name: 'Spray',
    hex: '#79DEEC',
    rgb: { r: 121, g: 222, b: 236 }
  },
  {
    name: 'Spring Green',
    hex: '#00FF7F',
    rgb: { r: 0, g: 255, b: 127 }
  },
  {
    name: 'Spring Leaves',
    hex: '#578363',
    rgb: { r: 87, g: 131, b: 99 }
  },
  {
    name: 'Spring Rain',
    hex: '#ACCBB1',
    rgb: { r: 172, g: 203, b: 177 }
  },
  {
    name: 'Spring Sun',
    hex: '#F6FFDC',
    rgb: { r: 246, g: 255, b: 220 }
  },
  {
    name: 'Spring Wood',
    hex: '#F8F6F1',
    rgb: { r: 248, g: 246, b: 241 }
  },
  {
    name: 'Sprout',
    hex: '#C1D7B0',
    rgb: { r: 193, g: 215, b: 176 }
  },
  {
    name: 'Spun Pearl',
    hex: '#AAABB7',
    rgb: { r: 170, g: 171, b: 183 }
  },
  {
    name: 'Squirrel',
    hex: '#8F8176',
    rgb: { r: 143, g: 129, b: 118 }
  },
  {
    name: 'St Tropaz',
    hex: '#2D569B',
    rgb: { r: 45, g: 86, b: 155 }
  },
  {
    name: 'Stack',
    hex: '#8A8F8A',
    rgb: { r: 138, g: 143, b: 138 }
  },
  {
    name: 'Star Dust',
    hex: '#9F9F9C',
    rgb: { r: 159, g: 159, b: 156 }
  },
  {
    name: 'Stark White',
    hex: '#E5D7BD',
    rgb: { r: 229, g: 215, b: 189 }
  },
  {
    name: 'Starship',
    hex: '#ECF245',
    rgb: { r: 236, g: 242, b: 69 }
  },
  {
    name: 'Steel Blue',
    hex: '#4682B4',
    rgb: { r: 70, g: 130, b: 180 }
  },
  {
    name: 'Steel Gray',
    hex: '#262335',
    rgb: { r: 38, g: 35, b: 53 }
  },
  {
    name: 'Stiletto',
    hex: '#9C3336',
    rgb: { r: 156, g: 51, b: 54 }
  },
  {
    name: 'Stonewall',
    hex: '#928573',
    rgb: { r: 146, g: 133, b: 115 }
  },
  {
    name: 'Storm Dust',
    hex: '#646463',
    rgb: { r: 100, g: 100, b: 99 }
  },
  {
    name: 'Storm Gray',
    hex: '#717486',
    rgb: { r: 113, g: 116, b: 134 }
  },
  { name: 'Stratos', hex: '#000741', rgb: { r: 0, g: 7, b: 65 } },
  {
    name: 'Straw',
    hex: '#D4BF8D',
    rgb: { r: 212, g: 191, b: 141 }
  },
  {
    name: 'Strikemaster',
    hex: '#956387',
    rgb: { r: 149, g: 99, b: 135 }
  },
  {
    name: 'Stromboli',
    hex: '#325D52',
    rgb: { r: 50, g: 93, b: 82 }
  },
  {
    name: 'Studio',
    hex: '#714AB2',
    rgb: { r: 113, g: 74, b: 178 }
  },
  {
    name: 'Submarine',
    hex: '#BAC7C9',
    rgb: { r: 186, g: 199, b: 201 }
  },
  {
    name: 'Sugar Cane',
    hex: '#F9FFF6',
    rgb: { r: 249, g: 255, b: 246 }
  },
  { name: 'Sulu', hex: '#C1F07C', rgb: { r: 193, g: 240, b: 124 } },
  {
    name: 'Summer Green',
    hex: '#96BBAB',
    rgb: { r: 150, g: 187, b: 171 }
  },
  { name: 'Sun', hex: '#FBAC13', rgb: { r: 251, g: 172, b: 19 } },
  {
    name: 'Sundance',
    hex: '#C9B35B',
    rgb: { r: 201, g: 179, b: 91 }
  },
  {
    name: 'Sundown',
    hex: '#FFB1B3',
    rgb: { r: 255, g: 177, b: 179 }
  },
  {
    name: 'Sunflower',
    hex: '#E4D422',
    rgb: { r: 228, g: 212, b: 34 }
  },
  {
    name: 'Sunglo',
    hex: '#E16865',
    rgb: { r: 225, g: 104, b: 101 }
  },
  {
    name: 'Sunglow',
    hex: '#FFCC33',
    rgb: { r: 255, g: 204, b: 51 }
  },
  {
    name: 'Sunset Orange',
    hex: '#FE4C40',
    rgb: { r: 254, g: 76, b: 64 }
  },
  {
    name: 'Sunshade',
    hex: '#FF9E2C',
    rgb: { r: 255, g: 158, b: 44 }
  },
  {
    name: 'Supernova',
    hex: '#FFC901',
    rgb: { r: 255, g: 201, b: 1 }
  },
  { name: 'Surf', hex: '#BBD7C1', rgb: { r: 187, g: 215, b: 193 } },
  {
    name: 'Surf Crest',
    hex: '#CFE5D2',
    rgb: { r: 207, g: 229, b: 210 }
  },
  {
    name: 'Surfie Green',
    hex: '#0C7A79',
    rgb: { r: 12, g: 122, b: 121 }
  },
  { name: 'Sushi', hex: '#87AB39', rgb: { r: 135, g: 171, b: 57 } },
  {
    name: 'Suva Gray',
    hex: '#888387',
    rgb: { r: 136, g: 131, b: 135 }
  },
  { name: 'Swamp', hex: '#001B1C', rgb: { r: 0, g: 27, b: 28 } },
  {
    name: 'Swamp Green',
    hex: '#ACB78E',
    rgb: { r: 172, g: 183, b: 142 }
  },
  {
    name: 'Swans Down',
    hex: '#DCF0EA',
    rgb: { r: 220, g: 240, b: 234 }
  },
  {
    name: 'Sweet Corn',
    hex: '#FBEA8C',
    rgb: { r: 251, g: 234, b: 140 }
  },
  {
    name: 'Sweet Pink',
    hex: '#FD9FA2',
    rgb: { r: 253, g: 159, b: 162 }
  },
  {
    name: 'Swirl',
    hex: '#D3CDC5',
    rgb: { r: 211, g: 205, b: 197 }
  },
  {
    name: 'Swiss Coffee',
    hex: '#DDD6D5',
    rgb: { r: 221, g: 214, b: 213 }
  },
  {
    name: 'Sycamore',
    hex: '#908D39',
    rgb: { r: 144, g: 141, b: 57 }
  },
  {
    name: 'Tabasco',
    hex: '#A02712',
    rgb: { r: 160, g: 39, b: 18 }
  },
  {
    name: 'Tacao',
    hex: '#EDB381',
    rgb: { r: 237, g: 179, b: 129 }
  },
  { name: 'Tacha', hex: '#D6C562', rgb: { r: 214, g: 197, b: 98 } },
  {
    name: 'Tahiti Gold',
    hex: '#E97C07',
    rgb: { r: 233, g: 124, b: 7 }
  },
  {
    name: 'Tahuna Sands',
    hex: '#EEF0C8',
    rgb: { r: 238, g: 240, b: 200 }
  },
  {
    name: 'Tall Poppy',
    hex: '#B32D29',
    rgb: { r: 179, g: 45, b: 41 }
  },
  {
    name: 'Tallow',
    hex: '#A8A589',
    rgb: { r: 168, g: 165, b: 137 }
  },
  {
    name: 'Tamarillo',
    hex: '#991613',
    rgb: { r: 153, g: 22, b: 19 }
  },
  {
    name: 'Tamarind',
    hex: '#341515',
    rgb: { r: 52, g: 21, b: 21 }
  },
  { name: 'Tan', hex: '#D2B48C', rgb: { r: 210, g: 180, b: 140 } },
  {
    name: 'Tan Hide',
    hex: '#FA9D5A',
    rgb: { r: 250, g: 157, b: 90 }
  },
  { name: 'Tana', hex: '#D9DCC1', rgb: { r: 217, g: 220, b: 193 } },
  { name: 'Tangaroa', hex: '#03163C', rgb: { r: 3, g: 22, b: 60 } },
  {
    name: 'Tangerine',
    hex: '#F28500',
    rgb: { r: 242, g: 133, b: 0 }
  },
  { name: 'Tango', hex: '#ED7A1C', rgb: { r: 237, g: 122, b: 28 } },
  { name: 'Tapa', hex: '#7B7874', rgb: { r: 123, g: 120, b: 116 } },
  {
    name: 'Tapestry',
    hex: '#B05E81',
    rgb: { r: 176, g: 94, b: 129 }
  },
  { name: 'Tara', hex: '#E1F6E8', rgb: { r: 225, g: 246, b: 232 } },
  { name: 'Tarawera', hex: '#073A50', rgb: { r: 7, g: 58, b: 80 } },
  {
    name: 'Tasman',
    hex: '#CFDCCF',
    rgb: { r: 207, g: 220, b: 207 }
  },
  { name: 'Taupe', hex: '#483C32', rgb: { r: 72, g: 60, b: 50 } },
  {
    name: 'Taupe Gray',
    hex: '#B3AF95',
    rgb: { r: 179, g: 175, b: 149 }
  },
  {
    name: 'Tawny Port',
    hex: '#692545',
    rgb: { r: 105, g: 37, b: 69 }
  },
  {
    name: 'Te Papa Green',
    hex: '#1E433C',
    rgb: { r: 30, g: 67, b: 60 }
  },
  { name: 'Tea', hex: '#C1BAB0', rgb: { r: 193, g: 186, b: 176 } },
  {
    name: 'Tea Green',
    hex: '#D0F0C0',
    rgb: { r: 208, g: 240, b: 192 }
  },
  { name: 'Teak', hex: '#B19461', rgb: { r: 177, g: 148, b: 97 } },
  { name: 'Teal', hex: '#008080', rgb: { r: 0, g: 128, b: 128 } },
  {
    name: 'Teal Blue',
    hex: '#044259',
    rgb: { r: 4, g: 66, b: 89 }
  },
  {
    name: 'Temptress',
    hex: '#3B000B',
    rgb: { r: 59, g: 0, b: 11 }
  },
  { name: 'Tenn', hex: '#CD5700', rgb: { r: 205, g: 87, b: 0 } },
  {
    name: 'Tequila',
    hex: '#FFE6C7',
    rgb: { r: 255, g: 230, b: 199 }
  },
  {
    name: 'Terracotta',
    hex: '#E2725B',
    rgb: { r: 226, g: 114, b: 91 }
  },
  {
    name: 'Texas',
    hex: '#F8F99C',
    rgb: { r: 248, g: 249, b: 156 }
  },
  {
    name: 'Texas Rose',
    hex: '#FFB555',
    rgb: { r: 255, g: 181, b: 85 }
  },
  {
    name: 'Thatch',
    hex: '#B69D98',
    rgb: { r: 182, g: 157, b: 152 }
  },
  {
    name: 'Thatch Green',
    hex: '#403D19',
    rgb: { r: 64, g: 61, b: 25 }
  },
  {
    name: 'Thistle',
    hex: '#D8BFD8',
    rgb: { r: 216, g: 191, b: 216 }
  },
  {
    name: 'Thistle Green',
    hex: '#CCCAA8',
    rgb: { r: 204, g: 202, b: 168 }
  },
  { name: 'Thunder', hex: '#33292F', rgb: { r: 51, g: 41, b: 47 } },
  {
    name: 'Thunderbird',
    hex: '#C02B18',
    rgb: { r: 192, g: 43, b: 24 }
  },
  {
    name: 'Tia Maria',
    hex: '#C1440E',
    rgb: { r: 193, g: 68, b: 14 }
  },
  {
    name: 'Tiara',
    hex: '#C3D1D1',
    rgb: { r: 195, g: 209, b: 209 }
  },
  { name: 'Tiber', hex: '#063537', rgb: { r: 6, g: 53, b: 55 } },
  {
    name: 'Tickle Me Pink',
    hex: '#FC80A5',
    rgb: { r: 252, g: 128, b: 165 }
  },
  {
    name: 'Tidal',
    hex: '#F1FFAD',
    rgb: { r: 241, g: 255, b: 173 }
  },
  { name: 'Tide', hex: '#BFB8B0', rgb: { r: 191, g: 184, b: 176 } },
  {
    name: 'Timber Green',
    hex: '#16322C',
    rgb: { r: 22, g: 50, b: 44 }
  },
  {
    name: 'Timberwolf',
    hex: '#D9D6CF',
    rgb: { r: 217, g: 214, b: 207 }
  },
  {
    name: 'Titan White',
    hex: '#F0EEFF',
    rgb: { r: 240, g: 238, b: 255 }
  },
  { name: 'Toast', hex: '#9A6E61', rgb: { r: 154, g: 110, b: 97 } },
  {
    name: 'Tobacco Brown',
    hex: '#715D47',
    rgb: { r: 113, g: 93, b: 71 }
  },
  { name: 'Toledo', hex: '#3A0020', rgb: { r: 58, g: 0, b: 32 } },
  { name: 'Tolopea', hex: '#1B0245', rgb: { r: 27, g: 2, b: 69 } },
  {
    name: 'Tom Thumb',
    hex: '#3F583B',
    rgb: { r: 63, g: 88, b: 59 }
  },
  {
    name: 'Tonys Pink',
    hex: '#E79F8C',
    rgb: { r: 231, g: 159, b: 140 }
  },
  {
    name: 'Topaz',
    hex: '#7C778A',
    rgb: { r: 124, g: 119, b: 138 }
  },
  {
    name: 'Torch Red',
    hex: '#FD0E35',
    rgb: { r: 253, g: 14, b: 53 }
  },
  {
    name: 'Torea Bay',
    hex: '#0F2D9E',
    rgb: { r: 15, g: 45, b: 158 }
  },
  {
    name: 'Tory Blue',
    hex: '#1450AA',
    rgb: { r: 20, g: 80, b: 170 }
  },
  { name: 'Tosca', hex: '#8D3F3F', rgb: { r: 141, g: 63, b: 63 } },
  {
    name: 'Totem Pole',
    hex: '#991B07',
    rgb: { r: 153, g: 27, b: 7 }
  },
  {
    name: 'Tower Gray',
    hex: '#A9BDBF',
    rgb: { r: 169, g: 189, b: 191 }
  },
  {
    name: 'Tradewind',
    hex: '#5FB3AC',
    rgb: { r: 95, g: 179, b: 172 }
  },
  {
    name: 'Tranquil',
    hex: '#E6FFFF',
    rgb: { r: 230, g: 255, b: 255 }
  },
  {
    name: 'Travertine',
    hex: '#FFFDE8',
    rgb: { r: 255, g: 253, b: 232 }
  },
  {
    name: 'Tree Poppy',
    hex: '#FC9C1D',
    rgb: { r: 252, g: 156, b: 29 }
  },
  {
    name: 'Treehouse',
    hex: '#3B2820',
    rgb: { r: 59, g: 40, b: 32 }
  },
  {
    name: 'Trendy Green',
    hex: '#7C881A',
    rgb: { r: 124, g: 136, b: 26 }
  },
  {
    name: 'Trendy Pink',
    hex: '#8C6495',
    rgb: { r: 140, g: 100, b: 149 }
  },
  {
    name: 'Trinidad',
    hex: '#E64E03',
    rgb: { r: 230, g: 78, b: 3 }
  },
  {
    name: 'Tropical Blue',
    hex: '#C3DDF9',
    rgb: { r: 195, g: 221, b: 249 }
  },
  {
    name: 'Tropical Rain Forest',
    hex: '#00755E',
    rgb: { r: 0, g: 117, b: 94 }
  },
  { name: 'Trout', hex: '#4A4E5A', rgb: { r: 74, g: 78, b: 90 } },
  {
    name: 'True V',
    hex: '#8A73D6',
    rgb: { r: 138, g: 115, b: 214 }
  },
  { name: 'Tuatara', hex: '#363534', rgb: { r: 54, g: 53, b: 52 } },
  {
    name: 'Tuft Bush',
    hex: '#FFDDCD',
    rgb: { r: 255, g: 221, b: 205 }
  },
  {
    name: 'Tulip Tree',
    hex: '#EAB33B',
    rgb: { r: 234, g: 179, b: 59 }
  },
  {
    name: 'Tumbleweed',
    hex: '#DEA681',
    rgb: { r: 222, g: 166, b: 129 }
  },
  { name: 'Tuna', hex: '#353542', rgb: { r: 53, g: 53, b: 66 } },
  { name: 'Tundora', hex: '#4A4244', rgb: { r: 74, g: 66, b: 68 } },
  { name: 'Turbo', hex: '#FAE600', rgb: { r: 250, g: 230, b: 0 } },
  {
    name: 'Turkish Rose',
    hex: '#B57281',
    rgb: { r: 181, g: 114, b: 129 }
  },
  {
    name: 'Turmeric',
    hex: '#CABB48',
    rgb: { r: 202, g: 187, b: 72 }
  },
  {
    name: 'Turquoise',
    hex: '#30D5C8',
    rgb: { r: 48, g: 213, b: 200 }
  },
  {
    name: 'Turquoise Blue',
    hex: '#6CDAE7',
    rgb: { r: 108, g: 218, b: 231 }
  },
  {
    name: 'Turtle Green',
    hex: '#2A380B',
    rgb: { r: 42, g: 56, b: 11 }
  },
  {
    name: 'Tuscany',
    hex: '#BD5E2E',
    rgb: { r: 189, g: 94, b: 46 }
  },
  { name: 'Tusk', hex: '#EEF3C3', rgb: { r: 238, g: 243, b: 195 } },
  {
    name: 'Tussock',
    hex: '#C5994B',
    rgb: { r: 197, g: 153, b: 75 }
  },
  { name: 'Tutu', hex: '#FFF1F9', rgb: { r: 255, g: 241, b: 249 } },
  {
    name: 'Twilight',
    hex: '#E4CFDE',
    rgb: { r: 228, g: 207, b: 222 }
  },
  {
    name: 'Twilight Blue',
    hex: '#EEFDFF',
    rgb: { r: 238, g: 253, b: 255 }
  },
  { name: 'Twine', hex: '#C2955D', rgb: { r: 194, g: 149, b: 93 } },
  {
    name: 'Tyrian Purple',
    hex: '#66023C',
    rgb: { r: 102, g: 2, b: 60 }
  },
  {
    name: 'Ultramarine',
    hex: '#120A8F',
    rgb: { r: 18, g: 10, b: 143 }
  },
  {
    name: 'Valencia',
    hex: '#D84437',
    rgb: { r: 216, g: 68, b: 55 }
  },
  {
    name: 'Valentino',
    hex: '#350E42',
    rgb: { r: 53, g: 14, b: 66 }
  },
  {
    name: 'Valhalla',
    hex: '#2B194F',
    rgb: { r: 43, g: 25, b: 79 }
  },
  {
    name: 'Van Cleef',
    hex: '#49170C',
    rgb: { r: 73, g: 23, b: 12 }
  },
  {
    name: 'Vanilla',
    hex: '#D1BEA8',
    rgb: { r: 209, g: 190, b: 168 }
  },
  {
    name: 'Vanilla Ice',
    hex: '#F3D9DF',
    rgb: { r: 243, g: 217, b: 223 }
  },
  {
    name: 'Varden',
    hex: '#FFF6DF',
    rgb: { r: 255, g: 246, b: 223 }
  },
  {
    name: 'Venetian Red',
    hex: '#72010F',
    rgb: { r: 114, g: 1, b: 15 }
  },
  {
    name: 'Venice Blue',
    hex: '#055989',
    rgb: { r: 5, g: 89, b: 137 }
  },
  {
    name: 'Venus',
    hex: '#928590',
    rgb: { r: 146, g: 133, b: 144 }
  },
  {
    name: 'Verdigris',
    hex: '#5D5E37',
    rgb: { r: 93, g: 94, b: 55 }
  },
  {
    name: 'Verdun Green',
    hex: '#495400',
    rgb: { r: 73, g: 84, b: 0 }
  },
  {
    name: 'Vermilion',
    hex: '#FF4D00',
    rgb: { r: 255, g: 77, b: 0 }
  },
  {
    name: 'Vesuvius',
    hex: '#B14A0B',
    rgb: { r: 177, g: 74, b: 11 }
  },
  {
    name: 'Victoria',
    hex: '#534491',
    rgb: { r: 83, g: 68, b: 145 }
  },
  {
    name: 'Vida Loca',
    hex: '#549019',
    rgb: { r: 84, g: 144, b: 25 }
  },
  {
    name: 'Viking',
    hex: '#64CCDB',
    rgb: { r: 100, g: 204, b: 219 }
  },
  {
    name: 'Vin Rouge',
    hex: '#983D61',
    rgb: { r: 152, g: 61, b: 97 }
  },
  {
    name: 'Viola',
    hex: '#CB8FA9',
    rgb: { r: 203, g: 143, b: 169 }
  },
  {
    name: 'Violent Violet',
    hex: '#290C5E',
    rgb: { r: 41, g: 12, b: 94 }
  },
  { name: 'Violet', hex: '#240A40', rgb: { r: 36, g: 10, b: 64 } },
  {
    name: 'Violet Eggplant',
    hex: '#991199',
    rgb: { r: 153, g: 17, b: 153 }
  },
  {
    name: 'Violet Red',
    hex: '#F7468A',
    rgb: { r: 247, g: 70, b: 138 }
  },
  {
    name: 'Viridian',
    hex: '#40826D',
    rgb: { r: 64, g: 130, b: 109 }
  },
  {
    name: 'Viridian Green',
    hex: '#678975',
    rgb: { r: 103, g: 137, b: 117 }
  },
  {
    name: 'Vis Vis',
    hex: '#FFEFA1',
    rgb: { r: 255, g: 239, b: 161 }
  },
  {
    name: 'Vista Blue',
    hex: '#8FD6B4',
    rgb: { r: 143, g: 214, b: 180 }
  },
  {
    name: 'Vista White',
    hex: '#FCF8F7',
    rgb: { r: 252, g: 248, b: 247 }
  },
  {
    name: 'Vivid Tangerine',
    hex: '#FF9980',
    rgb: { r: 255, g: 153, b: 128 }
  },
  {
    name: 'Vivid Violet',
    hex: '#803790',
    rgb: { r: 128, g: 55, b: 144 }
  },
  { name: 'Voodoo', hex: '#533455', rgb: { r: 83, g: 52, b: 85 } },
  { name: 'Vulcan', hex: '#10121D', rgb: { r: 16, g: 18, b: 29 } },
  {
    name: 'Wafer',
    hex: '#DECBC6',
    rgb: { r: 222, g: 203, b: 198 }
  },
  {
    name: 'Waikawa Gray',
    hex: '#5A6E9C',
    rgb: { r: 90, g: 110, b: 156 }
  },
  { name: 'Waiouru', hex: '#363C0D', rgb: { r: 54, g: 60, b: 13 } },
  { name: 'Walnut', hex: '#773F1A', rgb: { r: 119, g: 63, b: 26 } },
  {
    name: 'Wasabi',
    hex: '#788A25',
    rgb: { r: 120, g: 138, b: 37 }
  },
  {
    name: 'Water Leaf',
    hex: '#A1E9DE',
    rgb: { r: 161, g: 233, b: 222 }
  },
  {
    name: 'Watercourse',
    hex: '#056F57',
    rgb: { r: 5, g: 111, b: 87 }
  },
  {
    name: 'Waterloo ',
    hex: '#7B7C94',
    rgb: { r: 123, g: 124, b: 148 }
  },
  {
    name: 'Wattle',
    hex: '#DCD747',
    rgb: { r: 220, g: 215, b: 71 }
  },
  {
    name: 'Watusi',
    hex: '#FFDDCF',
    rgb: { r: 255, g: 221, b: 207 }
  },
  {
    name: 'Wax Flower',
    hex: '#FFC0A8',
    rgb: { r: 255, g: 192, b: 168 }
  },
  {
    name: 'We Peep',
    hex: '#F7DBE6',
    rgb: { r: 247, g: 219, b: 230 }
  },
  {
    name: 'Web Orange',
    hex: '#FFA500',
    rgb: { r: 255, g: 165, b: 0 }
  },
  {
    name: 'Wedgewood',
    hex: '#4E7F9E',
    rgb: { r: 78, g: 127, b: 158 }
  },
  {
    name: 'Well Read',
    hex: '#B43332',
    rgb: { r: 180, g: 51, b: 50 }
  },
  {
    name: 'West Coast',
    hex: '#625119',
    rgb: { r: 98, g: 81, b: 25 }
  },
  {
    name: 'West Side',
    hex: '#FF910F',
    rgb: { r: 255, g: 145, b: 15 }
  },
  {
    name: 'Westar',
    hex: '#DCD9D2',
    rgb: { r: 220, g: 217, b: 210 }
  },
  {
    name: 'Wewak',
    hex: '#F19BAB',
    rgb: { r: 241, g: 155, b: 171 }
  },
  {
    name: 'Wheat',
    hex: '#F5DEB3',
    rgb: { r: 245, g: 222, b: 179 }
  },
  {
    name: 'Wheatfield',
    hex: '#F3EDCF',
    rgb: { r: 243, g: 237, b: 207 }
  },
  {
    name: 'Whiskey',
    hex: '#D59A6F',
    rgb: { r: 213, g: 154, b: 111 }
  },
  {
    name: 'Whisper',
    hex: '#F7F5FA',
    rgb: { r: 247, g: 245, b: 250 }
  },
  {
    name: 'White',
    hex: '#FFFFFF',
    rgb: { r: 255, g: 255, b: 255 }
  },
  {
    name: 'White Ice',
    hex: '#DDF9F1',
    rgb: { r: 221, g: 249, b: 241 }
  },
  {
    name: 'White Lilac',
    hex: '#F8F7FC',
    rgb: { r: 248, g: 247, b: 252 }
  },
  {
    name: 'White Linen',
    hex: '#F8F0E8',
    rgb: { r: 248, g: 240, b: 232 }
  },
  {
    name: 'White Pointer',
    hex: '#FEF8FF',
    rgb: { r: 254, g: 248, b: 255 }
  },
  {
    name: 'White Rock',
    hex: '#EAE8D4',
    rgb: { r: 234, g: 232, b: 212 }
  },
  {
    name: 'Wild Blue Yonder',
    hex: '#7A89B8',
    rgb: { r: 122, g: 137, b: 184 }
  },
  {
    name: 'Wild Rice',
    hex: '#ECE090',
    rgb: { r: 236, g: 224, b: 144 }
  },
  {
    name: 'Wild Sand',
    hex: '#F4F4F4',
    rgb: { r: 244, g: 244, b: 244 }
  },
  {
    name: 'Wild Strawberry',
    hex: '#FF3399',
    rgb: { r: 255, g: 51, b: 153 }
  },
  {
    name: 'Wild Watermelon',
    hex: '#FD5B78',
    rgb: { r: 253, g: 91, b: 120 }
  },
  {
    name: 'Wild Willow',
    hex: '#B9C46A',
    rgb: { r: 185, g: 196, b: 106 }
  },
  {
    name: 'William',
    hex: '#3A686C',
    rgb: { r: 58, g: 104, b: 108 }
  },
  {
    name: 'Willow Brook',
    hex: '#DFECDA',
    rgb: { r: 223, g: 236, b: 218 }
  },
  {
    name: 'Willow Grove',
    hex: '#65745D',
    rgb: { r: 101, g: 116, b: 93 }
  },
  { name: 'Windsor', hex: '#3C0878', rgb: { r: 60, g: 8, b: 120 } },
  {
    name: 'Wine Berry',
    hex: '#591D35',
    rgb: { r: 89, g: 29, b: 53 }
  },
  {
    name: 'Winter Hazel',
    hex: '#D5D195',
    rgb: { r: 213, g: 209, b: 149 }
  },
  {
    name: 'Wisp Pink',
    hex: '#FEF4F8',
    rgb: { r: 254, g: 244, b: 248 }
  },
  {
    name: 'Wisteria',
    hex: '#9771B5',
    rgb: { r: 151, g: 113, b: 181 }
  },
  {
    name: 'Wistful',
    hex: '#A4A6D3',
    rgb: { r: 164, g: 166, b: 211 }
  },
  {
    name: 'Witch Haze',
    hex: '#FFFC99',
    rgb: { r: 255, g: 252, b: 153 }
  },
  {
    name: 'Wood Bark',
    hex: '#261105',
    rgb: { r: 38, g: 17, b: 5 }
  },
  {
    name: 'Woodland',
    hex: '#4D5328',
    rgb: { r: 77, g: 83, b: 40 }
  },
  {
    name: 'Woodrush',
    hex: '#302A0F',
    rgb: { r: 48, g: 42, b: 15 }
  },
  {
    name: 'Woodsmoke',
    hex: '#0C0D0F',
    rgb: { r: 12, g: 13, b: 15 }
  },
  {
    name: 'Woody Brown',
    hex: '#483131',
    rgb: { r: 72, g: 49, b: 49 }
  },
  {
    name: 'Xanadu',
    hex: '#738678',
    rgb: { r: 115, g: 134, b: 120 }
  },
  { name: 'Yellow', hex: '#FFFF00', rgb: { r: 255, g: 255, b: 0 } },
  {
    name: 'Yellow Green',
    hex: '#C5E17A',
    rgb: { r: 197, g: 225, b: 122 }
  },
  {
    name: 'Yellow Metal',
    hex: '#716338',
    rgb: { r: 113, g: 99, b: 56 }
  },
  {
    name: 'Yellow Orange',
    hex: '#FFAE42',
    rgb: { r: 255, g: 174, b: 66 }
  },
  {
    name: 'Yellow Sea',
    hex: '#FEA904',
    rgb: { r: 254, g: 169, b: 4 }
  },
  {
    name: 'Your Pink',
    hex: '#FFC3C0',
    rgb: { r: 255, g: 195, b: 192 }
  },
  {
    name: 'Yukon Gold',
    hex: '#7B6608',
    rgb: { r: 123, g: 102, b: 8 }
  },
  { name: 'Yuma', hex: '#CEC291', rgb: { r: 206, g: 194, b: 145 } },
  {
    name: 'Zambezi',
    hex: '#685558',
    rgb: { r: 104, g: 85, b: 88 }
  },
  {
    name: 'Zanah',
    hex: '#DAECD6',
    rgb: { r: 218, g: 236, b: 214 }
  },
  { name: 'Zest', hex: '#E5841B', rgb: { r: 229, g: 132, b: 27 } },
  { name: 'Zeus', hex: '#292319', rgb: { r: 41, g: 35, b: 25 } },
  {
    name: 'Ziggurat',
    hex: '#BFDBE2',
    rgb: { r: 191, g: 219, b: 226 }
  },
  {
    name: 'Zinnwaldite',
    hex: '#EBC2AF',
    rgb: { r: 235, g: 194, b: 175 }
  },
  {
    name: 'Zircon',
    hex: '#F4F8FF',
    rgb: { r: 244, g: 248, b: 255 }
  },
  {
    name: 'Zombie',
    hex: '#E4D69B',
    rgb: { r: 228, g: 214, b: 155 }
  },
  {
    name: 'Zorba',
    hex: '#A59B91',
    rgb: { r: 165, g: 155, b: 145 }
  },
  { name: 'Zuccini', hex: '#044022', rgb: { r: 4, g: 64, b: 34 } },
  {
    name: 'Zumthor',
    hex: '#EDF6FF',
    rgb: { r: 237, g: 246, b: 255 }
  },
  {
    name: 'Absolute Zero',
    hex: '#0048BA',
    rgb: { r: 0, g: 72, b: 186 }
  },
  { name: 'Acid', hex: '#B0BF1A', rgb: { r: 176, g: 191, b: 26 } },
  { name: 'Aero', hex: '#7CB9E8', rgb: { r: 124, g: 185, b: 232 } },
  {
    name: 'Air Force Blue',
    hex: '#5d8aa8',
    rgb: { r: 93, g: 138, b: 168 }
  },
  {
    name: 'Air Superiority Blue',
    hex: '#72A0C1',
    rgb: { r: 114, g: 160, b: 193 }
  },
  {
    name: 'Alizarin Crimson',
    hex: '#e32636',
    rgb: { r: 227, g: 38, b: 54 }
  },
  {
    name: 'Alloy Orange',
    hex: '#C46210',
    rgb: { r: 196, g: 98, b: 16 }
  },
  {
    name: 'American Rose',
    hex: '#ff033e',
    rgb: { r: 255, g: 3, b: 62 }
  },
  {
    name: 'Android Green',
    hex: '#a4c639',
    rgb: { r: 164, g: 198, b: 57 }
  },
  {
    name: 'Anti-flash White',
    hex: '#F2F3F4',
    rgb: { r: 242, g: 243, b: 244 }
  },
  {
    name: 'Antique Brass',
    hex: '#CD9575',
    rgb: { r: 205, g: 149, b: 117 }
  },
  {
    name: 'Antique Bronze',
    hex: '#665D1E',
    rgb: { r: 102, g: 93, b: 30 }
  },
  {
    name: 'Antique Fuchsia',
    hex: '#915C83',
    rgb: { r: 145, g: 92, b: 131 }
  },
  {
    name: 'Antique Ruby',
    hex: '#841B2D',
    rgb: { r: 132, g: 27, b: 45 }
  },
  {
    name: 'Antique White',
    hex: '#FAEBD7',
    rgb: { r: 250, g: 235, b: 215 }
  },
  { name: 'Ao', hex: '#008000', rgb: { r: 0, g: 128, b: 0 } },
  {
    name: 'Apple Green',
    hex: '#8DB600',
    rgb: { r: 141, g: 182, b: 0 }
  },
  {
    name: 'Arctic Lime',
    hex: '#D0FF14',
    rgb: { r: 208, g: 255, b: 20 }
  },
  {
    name: 'Army Green',
    hex: '#4B5320',
    rgb: { r: 75, g: 83, b: 32 }
  },
  {
    name: 'Artichoke',
    hex: '#8F9779',
    rgb: { r: 143, g: 151, b: 121 }
  },
  {
    name: 'Arylide Yellow',
    hex: '#E9D66B',
    rgb: { r: 233, g: 214, b: 107 }
  },
  {
    name: 'Ash Gray',
    hex: '#B2BEB5',
    rgb: { r: 178, g: 190, b: 181 }
  },
  {
    name: 'Ash Grey',
    hex: '#b2beb5',
    rgb: { r: 178, g: 190, b: 181 }
  },
  { name: 'Auburn', hex: '#A52A2A', rgb: { r: 165, g: 42, b: 42 } },
  {
    name: 'Aureolin',
    hex: '#FDEE00',
    rgb: { r: 253, g: 238, b: 0 }
  },
  {
    name: 'AuroMetalSaurus',
    hex: '#6e7f80',
    rgb: { r: 110, g: 127, b: 128 }
  },
  {
    name: 'Awesome',
    hex: '#ff2052',
    rgb: { r: 255, g: 32, b: 82 }
  },
  {
    name: 'Azure Mist/web',
    hex: '#f0ffff',
    rgb: { r: 240, g: 255, b: 255 }
  },
  {
    name: "B'dazzled Blue",
    hex: '#2E5894',
    rgb: { r: 46, g: 88, b: 148 }
  },
  {
    name: 'Baby Blue',
    hex: '#89CFF0',
    rgb: { r: 137, g: 207, b: 240 }
  },
  {
    name: 'Baby Blue Eyes',
    hex: '#A1CAF1',
    rgb: { r: 161, g: 202, b: 241 }
  },
  {
    name: 'Baby Pink',
    hex: '#F4C2C2',
    rgb: { r: 244, g: 194, b: 194 }
  },
  {
    name: 'Baker-Miller Pink',
    hex: '#FF91AF',
    rgb: { r: 255, g: 145, b: 175 }
  },
  {
    name: 'Ball Blue',
    hex: '#21abcd',
    rgb: { r: 33, g: 171, b: 205 }
  },
  {
    name: 'Banana Yellow',
    hex: '#ffe135',
    rgb: { r: 255, g: 225, b: 53 }
  },
  {
    name: 'Barbie Pink',
    hex: '#E94196',
    rgb: { r: 233, g: 65, b: 150 }
  },
  {
    name: 'Barbie Pink (Pantone)',
    hex: '#E0218A',
    rgb: { r: 224, g: 33, b: 138 }
  },
  {
    name: 'Barn Red',
    hex: '#7C0A02',
    rgb: { r: 124, g: 10, b: 2 }
  },
  {
    name: 'Battleship Grey',
    hex: '#848482',
    rgb: { r: 132, g: 132, b: 130 }
  },
  {
    name: 'Beau Blue',
    hex: '#BCD4E6',
    rgb: { r: 188, g: 212, b: 230 }
  },
  {
    name: 'Big Dip O’ruby',
    hex: '#9C2542',
    rgb: { r: 156, g: 37, b: 66 }
  },
  {
    name: 'Bisque',
    hex: '#FFE4C4',
    rgb: { r: 255, g: 228, b: 196 }
  },
  {
    name: 'Bistre Brown',
    hex: '#967117',
    rgb: { r: 150, g: 113, b: 23 }
  },
  {
    name: 'Bittersweet Shimmer',
    hex: '#BF4F51',
    rgb: { r: 191, g: 79, b: 81 }
  },
  {
    name: 'Black Chocolate',
    hex: '#1B1811',
    rgb: { r: 27, g: 24, b: 17 }
  },
  {
    name: 'Black Coffee',
    hex: '#3B2F2F',
    rgb: { r: 59, g: 47, b: 47 }
  },
  {
    name: 'Black Coral',
    hex: '#54626F',
    rgb: { r: 84, g: 98, b: 111 }
  },
  {
    name: 'Black Olive',
    hex: '#3B3C36',
    rgb: { r: 59, g: 60, b: 54 }
  },
  {
    name: 'Black Shadows',
    hex: '#BFAFB2',
    rgb: { r: 191, g: 175, b: 178 }
  },
  {
    name: 'Blanched Almond',
    hex: '#FFEBCD',
    rgb: { r: 255, g: 235, b: 205 }
  },
  {
    name: 'Blanched Almond',
    hex: '#ffebcd',
    rgb: { r: 255, g: 235, b: 205 }
  },
  {
    name: 'Blast-off Bronze',
    hex: '#A57164',
    rgb: { r: 165, g: 113, b: 100 }
  },
  {
    name: 'Bleu De France',
    hex: '#318CE7',
    rgb: { r: 49, g: 140, b: 231 }
  },
  {
    name: 'Blizzard Blue',
    hex: '#ACE5EE',
    rgb: { r: 172, g: 229, b: 238 }
  },
  {
    name: 'Blond',
    hex: '#FAF0BE',
    rgb: { r: 250, g: 240, b: 190 }
  },
  {
    name: 'Blood Red',
    hex: '#660000',
    rgb: { r: 102, g: 0, b: 0 }
  },
  {
    name: 'Blue (Crayola)',
    hex: '#1F75FE',
    rgb: { r: 31, g: 117, b: 254 }
  },
  {
    name: 'Blue (Munsell)',
    hex: '#0093AF',
    rgb: { r: 0, g: 147, b: 175 }
  },
  {
    name: 'Blue (NCS)',
    hex: '#0087BD',
    rgb: { r: 0, g: 135, b: 189 }
  },
  {
    name: 'Blue (Pantone)',
    hex: '#0018A8',
    rgb: { r: 0, g: 24, b: 168 }
  },
  {
    name: 'Blue (pigment)',
    hex: '#333399',
    rgb: { r: 51, g: 51, b: 153 }
  },
  {
    name: 'Blue (RYB)',
    hex: '#0247FE',
    rgb: { r: 2, g: 71, b: 254 }
  },
  {
    name: 'Blue Bell',
    hex: '#A2A2D0',
    rgb: { r: 162, g: 162, b: 208 }
  },
  {
    name: 'Blue Gray',
    hex: '#6699cc',
    rgb: { r: 102, g: 153, b: 204 }
  },
  {
    name: 'Blue Green',
    hex: '#0d98ba',
    rgb: { r: 13, g: 152, b: 186 }
  },
  {
    name: 'Blue Jeans',
    hex: '#5DADEC',
    rgb: { r: 93, g: 173, b: 236 }
  },
  {
    name: 'Blue Purple',
    hex: '#8a2be2',
    rgb: { r: 138, g: 43, b: 226 }
  },
  {
    name: 'Blue Sapphire',
    hex: '#126180',
    rgb: { r: 18, g: 97, b: 128 }
  },
  {
    name: 'Blue Yonder',
    hex: '#5072A7',
    rgb: { r: 80, g: 114, b: 167 }
  },
  {
    name: 'Blue-gray',
    hex: '#6699CC',
    rgb: { r: 102, g: 153, b: 204 }
  },
  {
    name: 'Blue-green',
    hex: '#0D98BA',
    rgb: { r: 13, g: 152, b: 186 }
  },
  {
    name: 'Blue-green (color Wheel)',
    hex: '#064E40',
    rgb: { r: 6, g: 78, b: 64 }
  },
  {
    name: 'Blue-violet',
    hex: '#8A2BE2',
    rgb: { r: 138, g: 43, b: 226 }
  },
  {
    name: 'Blue-violet (color Wheel)',
    hex: '#4D1A7F',
    rgb: { r: 77, g: 26, b: 127 }
  },
  {
    name: 'Blue-violet (Crayola)',
    hex: '#7366BD',
    rgb: { r: 115, g: 102, b: 189 }
  },
  {
    name: 'Bluetiful',
    hex: '#3C69E7',
    rgb: { r: 60, g: 105, b: 231 }
  },
  { name: 'Bole', hex: '#79443B', rgb: { r: 121, g: 68, b: 59 } },
  {
    name: 'Boston University Red',
    hex: '#cc0000',
    rgb: { r: 204, g: 0, b: 0 }
  },
  {
    name: 'Bottle Green',
    hex: '#006A4E',
    rgb: { r: 0, g: 106, b: 78 }
  },
  {
    name: 'Boysenberry',
    hex: '#873260',
    rgb: { r: 135, g: 50, b: 96 }
  },
  {
    name: 'Brandeis Blue',
    hex: '#0070ff',
    rgb: { r: 0, g: 112, b: 255 }
  },
  { name: 'Brass', hex: '#b5a642', rgb: { r: 181, g: 166, b: 66 } },
  {
    name: 'Brick Red',
    hex: '#CB4154',
    rgb: { r: 203, g: 65, b: 84 }
  },
  {
    name: 'Bright Cerulean',
    hex: '#1dacd6',
    rgb: { r: 29, g: 172, b: 214 }
  },
  {
    name: 'Bright Lavender',
    hex: '#bf94e4',
    rgb: { r: 191, g: 148, b: 228 }
  },
  {
    name: 'Bright Lilac',
    hex: '#D891EF',
    rgb: { r: 216, g: 145, b: 239 }
  },
  {
    name: 'Bright Navy Blue',
    hex: '#1974D2',
    rgb: { r: 25, g: 116, b: 210 }
  },
  {
    name: 'Bright Turquoise',
    hex: '#08e8de',
    rgb: { r: 8, g: 232, b: 222 }
  },
  {
    name: 'Bright Ube',
    hex: '#d19fe8',
    rgb: { r: 209, g: 159, b: 232 }
  },
  {
    name: 'Bright Yellow (Crayola)',
    hex: '#FFAA1D',
    rgb: { r: 255, g: 170, b: 29 }
  },
  {
    name: 'Brilliant Lavender',
    hex: '#f4bbff',
    rgb: { r: 244, g: 187, b: 255 }
  },
  {
    name: 'Brilliant Rose',
    hex: '#FF55A3',
    rgb: { r: 255, g: 85, b: 163 }
  },
  {
    name: 'British Racing Green',
    hex: '#004225',
    rgb: { r: 0, g: 66, b: 37 }
  },
  {
    name: 'Brown Sugar',
    hex: '#AF6E4D',
    rgb: { r: 175, g: 110, b: 77 }
  },
  {
    name: 'Brunswick Green',
    hex: '#1B4D3E',
    rgb: { r: 27, g: 77, b: 62 }
  },
  {
    name: 'Bubble Gum',
    hex: '#ffc1cc',
    rgb: { r: 255, g: 193, b: 204 }
  },
  {
    name: 'Bud Green',
    hex: '#7BB661',
    rgb: { r: 123, g: 182, b: 97 }
  },
  {
    name: 'Burlywood',
    hex: '#DEB887',
    rgb: { r: 222, g: 184, b: 135 }
  },
  {
    name: 'Burnished Brown',
    hex: '#A17A74',
    rgb: { r: 161, g: 122, b: 116 }
  },
  {
    name: 'Byzantine',
    hex: '#BD33A4',
    rgb: { r: 189, g: 51, b: 164 }
  },
  {
    name: 'Byzantium',
    hex: '#702963',
    rgb: { r: 112, g: 41, b: 99 }
  },
  { name: 'Cadet', hex: '#536872', rgb: { r: 83, g: 104, b: 114 } },
  {
    name: 'Cadet Blue',
    hex: '#5F9EA0',
    rgb: { r: 95, g: 158, b: 160 }
  },
  {
    name: 'Cadet Grey',
    hex: '#91A3B0',
    rgb: { r: 145, g: 163, b: 176 }
  },
  {
    name: 'Cadmium Green',
    hex: '#006B3C',
    rgb: { r: 0, g: 107, b: 60 }
  },
  {
    name: 'Cadmium Orange',
    hex: '#ED872D',
    rgb: { r: 237, g: 135, b: 45 }
  },
  {
    name: 'Cadmium Red',
    hex: '#E30022',
    rgb: { r: 227, g: 0, b: 34 }
  },
  {
    name: 'Cadmium Yellow',
    hex: '#FFF600',
    rgb: { r: 255, g: 246, b: 0 }
  },
  {
    name: 'Café Au Lait',
    hex: '#A67B5B',
    rgb: { r: 166, g: 123, b: 91 }
  },
  {
    name: 'Café Noir',
    hex: '#4B3621',
    rgb: { r: 75, g: 54, b: 33 }
  },
  {
    name: 'Cal Poly Pomona Green',
    hex: '#1E4D2B',
    rgb: { r: 30, g: 77, b: 43 }
  },
  {
    name: 'Cambridge Blue',
    hex: '#A3C1AD',
    rgb: { r: 163, g: 193, b: 173 }
  },
  {
    name: 'Cambridge Blue',
    hex: '#a3c1ad',
    rgb: { r: 163, g: 193, b: 173 }
  },
  {
    name: 'Camel',
    hex: '#C19A6B',
    rgb: { r: 193, g: 154, b: 107 }
  },
  {
    name: 'Cameo Pink',
    hex: '#EFBBCC',
    rgb: { r: 239, g: 187, b: 204 }
  },
  {
    name: 'Camouflage Green',
    hex: '#78866b',
    rgb: { r: 120, g: 134, b: 107 }
  },
  {
    name: 'Canary Yellow',
    hex: '#FFEF00',
    rgb: { r: 255, g: 239, b: 0 }
  },
  {
    name: 'Candy Apple Red',
    hex: '#FF0800',
    rgb: { r: 255, g: 8, b: 0 }
  },
  {
    name: 'Candy Pink',
    hex: '#E4717A',
    rgb: { r: 228, g: 113, b: 122 }
  },
  { name: 'Capri', hex: '#00BFFF', rgb: { r: 0, g: 191, b: 255 } },
  {
    name: 'Caput Mortuum',
    hex: '#592720',
    rgb: { r: 89, g: 39, b: 32 }
  },
  {
    name: 'Carmine (M&P)',
    hex: '#D70040',
    rgb: { r: 215, g: 0, b: 64 }
  },
  {
    name: 'Carmine Pink',
    hex: '#eb4c42',
    rgb: { r: 235, g: 76, b: 66 }
  },
  {
    name: 'Carmine Red',
    hex: '#ff0038',
    rgb: { r: 255, g: 0, b: 56 }
  },
  {
    name: 'Carnelian',
    hex: '#B31B1B',
    rgb: { r: 179, g: 27, b: 27 }
  },
  {
    name: 'Carolina Blue',
    hex: '#56A0D3',
    rgb: { r: 86, g: 160, b: 211 }
  },
  {
    name: 'Castleton Green',
    hex: '#00563F',
    rgb: { r: 0, g: 86, b: 63 }
  },
  {
    name: 'Catawba',
    hex: '#703642',
    rgb: { r: 112, g: 54, b: 66 }
  },
  {
    name: 'Cedar Chest',
    hex: '#C95A49',
    rgb: { r: 201, g: 90, b: 73 }
  },
  {
    name: 'Celadon Green',
    hex: '#2F847C',
    rgb: { r: 47, g: 132, b: 124 }
  },
  {
    name: 'Celestial Blue',
    hex: '#4997d0',
    rgb: { r: 73, g: 151, b: 208 }
  },
  {
    name: 'Celtic Blue',
    hex: '#246BCE',
    rgb: { r: 36, g: 107, b: 206 }
  },
  {
    name: 'Cerise Pink',
    hex: '#ec3b83',
    rgb: { r: 236, g: 59, b: 131 }
  },
  {
    name: 'Cerulean (Crayola)',
    hex: '#1DACD6',
    rgb: { r: 29, g: 172, b: 214 }
  },
  {
    name: 'Cerulean Frost',
    hex: '#6D9BC3',
    rgb: { r: 109, g: 155, b: 195 }
  },
  {
    name: 'CG Blue',
    hex: '#007AA5',
    rgb: { r: 0, g: 122, b: 165 }
  },
  {
    name: 'CG Blue',
    hex: '#007aa5',
    rgb: { r: 0, g: 122, b: 165 }
  },
  { name: 'CG Red', hex: '#E03C31', rgb: { r: 224, g: 60, b: 49 } },
  { name: 'CG Red', hex: '#e03c31', rgb: { r: 224, g: 60, b: 49 } },
  {
    name: 'Chamoisee',
    hex: '#a0785a',
    rgb: { r: 160, g: 120, b: 90 }
  },
  {
    name: 'Champagne Pink',
    hex: '#F1DDCF',
    rgb: { r: 241, g: 221, b: 207 }
  },
  {
    name: 'Charcoal',
    hex: '#36454F',
    rgb: { r: 54, g: 69, b: 79 }
  },
  {
    name: 'Charleston Green',
    hex: '#232B2B',
    rgb: { r: 35, g: 43, b: 43 }
  },
  {
    name: 'Charm Pink',
    hex: '#E68FAC',
    rgb: { r: 230, g: 143, b: 172 }
  },
  { name: 'Cherry', hex: '#de3163', rgb: { r: 222, g: 49, b: 99 } },
  {
    name: 'Cherry Blossom Pink',
    hex: '#FFB7C5',
    rgb: { r: 255, g: 183, b: 197 }
  },
  {
    name: 'China Pink',
    hex: '#DE6FA1',
    rgb: { r: 222, g: 111, b: 161 }
  },
  {
    name: 'China Rose',
    hex: '#A8516E',
    rgb: { r: 168, g: 81, b: 110 }
  },
  {
    name: 'Chinese Red',
    hex: '#AA381E',
    rgb: { r: 170, g: 56, b: 30 }
  },
  {
    name: 'Chinese Violet',
    hex: '#856088',
    rgb: { r: 133, g: 96, b: 136 }
  },
  {
    name: 'Chinese Yellow',
    hex: '#FFB200',
    rgb: { r: 255, g: 178, b: 0 }
  },
  {
    name: 'Chrome Yellow',
    hex: '#FFA700',
    rgb: { r: 255, g: 167, b: 0 }
  },
  {
    name: 'Cinereous',
    hex: '#98817B',
    rgb: { r: 152, g: 129, b: 123 }
  },
  {
    name: 'Cinnamon Satin',
    hex: '#CD607E',
    rgb: { r: 205, g: 96, b: 126 }
  },
  {
    name: 'Citrine',
    hex: '#E4D00A',
    rgb: { r: 228, g: 208, b: 10 }
  },
  {
    name: 'Classic Rose',
    hex: '#fbcce7',
    rgb: { r: 251, g: 204, b: 231 }
  },
  {
    name: 'Columbia Blue',
    hex: '#9bddff',
    rgb: { r: 155, g: 221, b: 255 }
  },
  {
    name: 'Columbia Blue',
    hex: '#B9D9EB',
    rgb: { r: 185, g: 217, b: 235 }
  },
  {
    name: 'Congo Pink',
    hex: '#F88379',
    rgb: { r: 248, g: 131, b: 121 }
  },
  {
    name: 'Cool Black',
    hex: '#002e63',
    rgb: { r: 0, g: 46, b: 99 }
  },
  {
    name: 'Cool Grey',
    hex: '#8C92AC',
    rgb: { r: 140, g: 146, b: 172 }
  },
  {
    name: 'Copper Penny',
    hex: '#AD6F69',
    rgb: { r: 173, g: 111, b: 105 }
  },
  {
    name: 'Copper Red',
    hex: '#CB6D51',
    rgb: { r: 203, g: 109, b: 81 }
  },
  {
    name: 'Coquelicot',
    hex: '#FF3800',
    rgb: { r: 255, g: 56, b: 0 }
  },
  {
    name: 'Coral Red',
    hex: '#ff4040',
    rgb: { r: 255, g: 64, b: 64 }
  },
  {
    name: 'Cordovan',
    hex: '#893F45',
    rgb: { r: 137, g: 63, b: 69 }
  },
  {
    name: 'Cornell Red',
    hex: '#b31b1b',
    rgb: { r: 179, g: 27, b: 27 }
  },
  {
    name: 'Cornsilk',
    hex: '#FFF8DC',
    rgb: { r: 255, g: 248, b: 220 }
  },
  {
    name: 'Cosmic Cobalt',
    hex: '#2E2D88',
    rgb: { r: 46, g: 45, b: 136 }
  },
  {
    name: 'Cosmic Latte',
    hex: '#FFF8E7',
    rgb: { r: 255, g: 248, b: 231 }
  },
  {
    name: 'Cosmos Pink',
    hex: '#FEBCFF',
    rgb: { r: 254, g: 188, b: 255 }
  },
  {
    name: 'Cotton Candy',
    hex: '#FFBCD9',
    rgb: { r: 255, g: 188, b: 217 }
  },
  {
    name: 'Coyote Brown',
    hex: '#81613C',
    rgb: { r: 129, g: 97, b: 60 }
  },
  {
    name: 'Crimson Glory',
    hex: '#be0032',
    rgb: { r: 190, g: 0, b: 50 }
  },
  {
    name: 'Crimson Red',
    hex: '#990000',
    rgb: { r: 153, g: 0, b: 0 }
  },
  {
    name: 'Cultured',
    hex: '#F5F5F5',
    rgb: { r: 245, g: 245, b: 245 }
  },
  {
    name: 'Cyan (process)',
    hex: '#00B7EB',
    rgb: { r: 0, g: 183, b: 235 }
  },
  {
    name: 'Cyber Grape',
    hex: '#58427C',
    rgb: { r: 88, g: 66, b: 124 }
  },
  {
    name: 'Cyber Yellow',
    hex: '#FFD300',
    rgb: { r: 255, g: 211, b: 0 }
  },
  {
    name: 'Cyclamen',
    hex: '#F56FA1',
    rgb: { r: 245, g: 111, b: 161 }
  },
  {
    name: 'Daffodil',
    hex: '#ffff31',
    rgb: { r: 255, g: 255, b: 49 }
  },
  {
    name: 'Dark Blue',
    hex: '#00008b',
    rgb: { r: 0, g: 0, b: 139 }
  },
  {
    name: 'Dark Blue-gray',
    hex: '#666699',
    rgb: { r: 102, g: 102, b: 153 }
  },
  {
    name: 'Dark Brown',
    hex: '#654321',
    rgb: { r: 101, g: 67, b: 33 }
  },
  {
    name: 'Dark Byzantium',
    hex: '#5D3954',
    rgb: { r: 93, g: 57, b: 84 }
  },
  {
    name: 'Dark Candy Apple Red',
    hex: '#a40000',
    rgb: { r: 164, g: 0, b: 0 }
  },
  {
    name: 'Dark Cerulean',
    hex: '#08457e',
    rgb: { r: 8, g: 69, b: 126 }
  },
  {
    name: 'Dark Chestnut',
    hex: '#986960',
    rgb: { r: 152, g: 105, b: 96 }
  },
  {
    name: 'Dark Coral',
    hex: '#cd5b45',
    rgb: { r: 205, g: 91, b: 69 }
  },
  {
    name: 'Dark Cornflower Blue',
    hex: '#26428B',
    rgb: { r: 38, g: 66, b: 139 }
  },
  {
    name: 'Dark Cyan',
    hex: '#008B8B',
    rgb: { r: 0, g: 139, b: 139 }
  },
  {
    name: 'Dark Electric Blue',
    hex: '#536878',
    rgb: { r: 83, g: 104, b: 120 }
  },
  {
    name: 'Dark Goldenrod',
    hex: '#B8860B',
    rgb: { r: 184, g: 134, b: 11 }
  },
  {
    name: 'Dark Gray',
    hex: '#a9a9a9',
    rgb: { r: 169, g: 169, b: 169 }
  },
  {
    name: 'Dark Green',
    hex: '#013220',
    rgb: { r: 1, g: 50, b: 32 }
  },
  {
    name: 'Dark Green (X11)',
    hex: '#006400',
    rgb: { r: 0, g: 100, b: 0 }
  },
  {
    name: 'Dark Jungle Green',
    hex: '#1A2421',
    rgb: { r: 26, g: 36, b: 33 }
  },
  {
    name: 'Dark Khaki',
    hex: '#BDB76B',
    rgb: { r: 189, g: 183, b: 107 }
  },
  {
    name: 'Dark Lavender',
    hex: '#734f96',
    rgb: { r: 115, g: 79, b: 150 }
  },
  {
    name: 'Dark Liver',
    hex: '#534B4F',
    rgb: { r: 83, g: 75, b: 79 }
  },
  {
    name: 'Dark Liver (horses)',
    hex: '#543D37',
    rgb: { r: 84, g: 61, b: 55 }
  },
  {
    name: 'Dark Magenta',
    hex: '#8B008B',
    rgb: { r: 139, g: 0, b: 139 }
  },
  {
    name: 'Dark Medium Gray',
    hex: '#A9A9A9',
    rgb: { r: 169, g: 169, b: 169 }
  },
  {
    name: 'Dark Moss Green',
    hex: '#4A5D23',
    rgb: { r: 74, g: 93, b: 35 }
  },
  {
    name: 'Dark Olive Green',
    hex: '#556B2F',
    rgb: { r: 85, g: 107, b: 47 }
  },
  {
    name: 'Dark Orange',
    hex: '#FF8C00',
    rgb: { r: 255, g: 140, b: 0 }
  },
  {
    name: 'Dark Orchid',
    hex: '#9932CC',
    rgb: { r: 153, g: 50, b: 204 }
  },
  {
    name: 'Dark Pastel Blue',
    hex: '#779ecb',
    rgb: { r: 119, g: 158, b: 203 }
  },
  {
    name: 'Dark Pastel Green',
    hex: '#03C03C',
    rgb: { r: 3, g: 192, b: 60 }
  },
  {
    name: 'Dark Pastel Purple',
    hex: '#966fd6',
    rgb: { r: 150, g: 111, b: 214 }
  },
  {
    name: 'Dark Pastel Red',
    hex: '#c23b22',
    rgb: { r: 194, g: 59, b: 34 }
  },
  {
    name: 'Dark Pink',
    hex: '#e75480',
    rgb: { r: 231, g: 84, b: 128 }
  },
  {
    name: 'Dark Purple',
    hex: '#301934',
    rgb: { r: 48, g: 25, b: 52 }
  },
  {
    name: 'Dark Raspberry',
    hex: '#872657',
    rgb: { r: 135, g: 38, b: 87 }
  },
  { name: 'Dark Red', hex: '#8B0000', rgb: { r: 139, g: 0, b: 0 } },
  {
    name: 'Dark Salmon',
    hex: '#E9967A',
    rgb: { r: 233, g: 150, b: 122 }
  },
  {
    name: 'Dark Scarlet',
    hex: '#560319',
    rgb: { r: 86, g: 3, b: 25 }
  },
  {
    name: 'Dark Sea Green',
    hex: '#8FBC8F',
    rgb: { r: 143, g: 188, b: 143 }
  },
  {
    name: 'Dark Sienna',
    hex: '#3C1414',
    rgb: { r: 60, g: 20, b: 20 }
  },
  {
    name: 'Dark Sky Blue',
    hex: '#8CBED6',
    rgb: { r: 140, g: 190, b: 214 }
  },
  {
    name: 'Dark Slate Blue',
    hex: '#483D8B',
    rgb: { r: 72, g: 61, b: 139 }
  },
  {
    name: 'Dark Slate Gray',
    hex: '#2F4F4F',
    rgb: { r: 47, g: 79, b: 79 }
  },
  {
    name: 'Dark Spring Green',
    hex: '#177245',
    rgb: { r: 23, g: 114, b: 69 }
  },
  {
    name: 'Dark Tan',
    hex: '#918151',
    rgb: { r: 145, g: 129, b: 81 }
  },
  {
    name: 'Dark Tangerine',
    hex: '#ffa812',
    rgb: { r: 255, g: 168, b: 18 }
  },
  {
    name: 'Dark Taupe',
    hex: '#483c32',
    rgb: { r: 72, g: 60, b: 50 }
  },
  {
    name: 'Dark Terra Cotta',
    hex: '#cc4e5c',
    rgb: { r: 204, g: 78, b: 92 }
  },
  {
    name: 'Dark Turquoise',
    hex: '#00CED1',
    rgb: { r: 0, g: 206, b: 209 }
  },
  {
    name: 'Dark Violet',
    hex: '#9400D3',
    rgb: { r: 148, g: 0, b: 211 }
  },
  {
    name: 'Dartmouth Green',
    hex: '#00703C',
    rgb: { r: 0, g: 112, b: 60 }
  },
  {
    name: 'Davy Grey',
    hex: '#555555',
    rgb: { r: 85, g: 85, b: 85 }
  },
  {
    name: 'Debian Red',
    hex: '#d70a53',
    rgb: { r: 215, g: 10, b: 83 }
  },
  {
    name: 'Deep Carmine',
    hex: '#a9203e',
    rgb: { r: 169, g: 32, b: 62 }
  },
  {
    name: 'Deep Carmine Pink',
    hex: '#ef3038',
    rgb: { r: 239, g: 48, b: 56 }
  },
  {
    name: 'Deep Carrot Orange',
    hex: '#e9692c',
    rgb: { r: 233, g: 105, b: 44 }
  },
  {
    name: 'Deep Champagne',
    hex: '#FAD6A5',
    rgb: { r: 250, g: 214, b: 165 }
  },
  {
    name: 'Deep Coffee',
    hex: '#704241',
    rgb: { r: 112, g: 66, b: 65 }
  },
  {
    name: 'Deep Jungle Green',
    hex: '#004B49',
    rgb: { r: 0, g: 75, b: 73 }
  },
  {
    name: 'Deep Lilac',
    hex: '#9955bb',
    rgb: { r: 153, g: 85, b: 187 }
  },
  {
    name: 'Deep Magenta',
    hex: '#cc00cc',
    rgb: { r: 204, g: 0, b: 204 }
  },
  {
    name: 'Deep Peach',
    hex: '#ffcba4',
    rgb: { r: 255, g: 203, b: 164 }
  },
  {
    name: 'Deep Pink',
    hex: '#FF1493',
    rgb: { r: 255, g: 20, b: 147 }
  },
  {
    name: 'Deep Space Sparkle',
    hex: '#4A646C',
    rgb: { r: 74, g: 100, b: 108 }
  },
  {
    name: 'Deep Taupe',
    hex: '#7E5E60',
    rgb: { r: 126, g: 94, b: 96 }
  },
  {
    name: 'Denim Blue',
    hex: '#2243B6',
    rgb: { r: 34, g: 67, b: 182 }
  },
  {
    name: 'Dim Gray',
    hex: '#696969',
    rgb: { r: 105, g: 105, b: 105 }
  },
  {
    name: 'Dogwood Rose',
    hex: '#D71868',
    rgb: { r: 215, g: 24, b: 104 }
  },
  {
    name: 'Dollar Bill',
    hex: '#85bb65',
    rgb: { r: 133, g: 187, b: 101 }
  },
  {
    name: 'Duke Blue',
    hex: '#00009C',
    rgb: { r: 0, g: 0, b: 156 }
  },
  {
    name: 'Dutch White',
    hex: '#EFDFBB',
    rgb: { r: 239, g: 223, b: 187 }
  },
  {
    name: 'Earth Yellow',
    hex: '#E1A95F',
    rgb: { r: 225, g: 169, b: 95 }
  },
  { name: 'Ecru', hex: '#C2B280', rgb: { r: 194, g: 178, b: 128 } },
  {
    name: 'Eerie Black',
    hex: '#1B1B1B',
    rgb: { r: 27, g: 27, b: 27 }
  },
  {
    name: 'Eggshell',
    hex: '#F0EAD6',
    rgb: { r: 240, g: 234, b: 214 }
  },
  {
    name: 'Egyptian Blue',
    hex: '#1034A6',
    rgb: { r: 16, g: 52, b: 166 }
  },
  {
    name: 'Electric Blue',
    hex: '#7DF9FF',
    rgb: { r: 125, g: 249, b: 255 }
  },
  {
    name: 'Electric Crimson',
    hex: '#ff003f',
    rgb: { r: 255, g: 0, b: 63 }
  },
  {
    name: 'Electric Cyan',
    hex: '#00ffff',
    rgb: { r: 0, g: 255, b: 255 }
  },
  {
    name: 'Electric Indigo',
    hex: '#6F00FF',
    rgb: { r: 111, g: 0, b: 255 }
  },
  {
    name: 'Electric Purple',
    hex: '#BF00FF',
    rgb: { r: 191, g: 0, b: 255 }
  },
  {
    name: 'Electric Ultramarine',
    hex: '#3f00ff',
    rgb: { r: 63, g: 0, b: 255 }
  },
  {
    name: 'Electric Violet',
    hex: '#8F00FF',
    rgb: { r: 143, g: 0, b: 255 }
  },
  {
    name: 'Electric Yellow',
    hex: '#ffff00',
    rgb: { r: 255, g: 255, b: 0 }
  },
  {
    name: 'English Lavender',
    hex: '#B48395',
    rgb: { r: 180, g: 131, b: 149 }
  },
  {
    name: 'English Red',
    hex: '#AB4B52',
    rgb: { r: 171, g: 75, b: 82 }
  },
  {
    name: 'English Vermillion',
    hex: '#CC474B',
    rgb: { r: 204, g: 71, b: 75 }
  },
  {
    name: 'English Violet',
    hex: '#563C5C',
    rgb: { r: 86, g: 60, b: 92 }
  },
  { name: 'Erin', hex: '#00FF40', rgb: { r: 0, g: 255, b: 64 } },
  {
    name: 'Eton Blue',
    hex: '#96C8A2',
    rgb: { r: 150, g: 200, b: 162 }
  },
  { name: 'Famous', hex: '#ff00ff', rgb: { r: 255, g: 0, b: 255 } },
  {
    name: 'Fandango',
    hex: '#B53389',
    rgb: { r: 181, g: 51, b: 137 }
  },
  {
    name: 'Fandango Pink',
    hex: '#DE5285',
    rgb: { r: 222, g: 82, b: 133 }
  },
  { name: 'Fawn', hex: '#E5AA70', rgb: { r: 229, g: 170, b: 112 } },
  {
    name: 'Feldgrau',
    hex: '#4D5D53',
    rgb: { r: 77, g: 93, b: 83 }
  },
  {
    name: 'Ferrari Red',
    hex: '#ff2800',
    rgb: { r: 255, g: 40, b: 0 }
  },
  {
    name: 'Field Drab',
    hex: '#6C541E',
    rgb: { r: 108, g: 84, b: 30 }
  },
  {
    name: 'Fiery Rose',
    hex: '#FF5470',
    rgb: { r: 255, g: 84, b: 112 }
  },
  {
    name: 'Fire Engine Red',
    hex: '#CE2029',
    rgb: { r: 206, g: 32, b: 41 }
  },
  {
    name: 'Fire Opal',
    hex: '#E95C4B',
    rgb: { r: 233, g: 92, b: 75 }
  },
  {
    name: 'Firebrick',
    hex: '#B22222',
    rgb: { r: 178, g: 34, b: 34 }
  },
  { name: 'Flame', hex: '#E25822', rgb: { r: 226, g: 88, b: 34 } },
  {
    name: 'Flamingo Pink',
    hex: '#fc8eac',
    rgb: { r: 252, g: 142, b: 172 }
  },
  {
    name: 'Flavescent',
    hex: '#f7e98e',
    rgb: { r: 247, g: 233, b: 142 }
  },
  {
    name: 'Flavescent[2]',
    hex: '#F7E98E',
    rgb: { r: 247, g: 233, b: 142 }
  },
  {
    name: 'Floral White',
    hex: '#FFFAF0',
    rgb: { r: 255, g: 250, b: 240 }
  },
  {
    name: 'Fluorescent Blue',
    hex: '#15F4EE',
    rgb: { r: 21, g: 244, b: 238 }
  },
  {
    name: 'Fluorescent Orange',
    hex: '#ffbf00',
    rgb: { r: 255, g: 191, b: 0 }
  },
  {
    name: 'Fluorescent Pink',
    hex: '#ff1493',
    rgb: { r: 255, g: 20, b: 147 }
  },
  {
    name: 'Fluorescent Yellow',
    hex: '#ccff00',
    rgb: { r: 204, g: 255, b: 0 }
  },
  { name: 'Folly', hex: '#ff004f', rgb: { r: 255, g: 0, b: 79 } },
  {
    name: 'Forest Green',
    hex: '#228b22',
    rgb: { r: 34, g: 139, b: 34 }
  },
  {
    name: 'Forest Green (traditional)',
    hex: '#014421',
    rgb: { r: 1, g: 68, b: 33 }
  },
  {
    name: 'French Bistre',
    hex: '#856D4D',
    rgb: { r: 133, g: 109, b: 77 }
  },
  {
    name: 'French Blue',
    hex: '#0072BB',
    rgb: { r: 0, g: 114, b: 187 }
  },
  {
    name: 'French Fuchsia',
    hex: '#FD3F92',
    rgb: { r: 253, g: 63, b: 146 }
  },
  {
    name: 'French Lilac',
    hex: '#86608E',
    rgb: { r: 134, g: 96, b: 142 }
  },
  {
    name: 'French Lime',
    hex: '#9EFD38',
    rgb: { r: 158, g: 253, b: 56 }
  },
  {
    name: 'French Mauve',
    hex: '#D473D4',
    rgb: { r: 212, g: 115, b: 212 }
  },
  {
    name: 'French Pink',
    hex: '#FD6C9E',
    rgb: { r: 253, g: 108, b: 158 }
  },
  {
    name: 'French Raspberry',
    hex: '#C72C48',
    rgb: { r: 199, g: 44, b: 72 }
  },
  {
    name: 'French Sky Blue',
    hex: '#77B5FE',
    rgb: { r: 119, g: 181, b: 254 }
  },
  {
    name: 'French Violet',
    hex: '#8806CE',
    rgb: { r: 136, g: 6, b: 206 }
  },
  {
    name: 'Frostbite',
    hex: '#E936A7',
    rgb: { r: 233, g: 54, b: 167 }
  },
  {
    name: 'Fuchsia Pink',
    hex: '#ff77ff',
    rgb: { r: 255, g: 119, b: 255 }
  },
  {
    name: 'Fuchsia Purple',
    hex: '#CC397B',
    rgb: { r: 204, g: 57, b: 123 }
  },
  {
    name: 'Fuchsia Rose',
    hex: '#C74375',
    rgb: { r: 199, g: 67, b: 117 }
  },
  {
    name: 'Fulvous',
    hex: '#E48400',
    rgb: { r: 228, g: 132, b: 0 }
  },
  {
    name: 'Fuzzy Wuzzy',
    hex: '#CC6666',
    rgb: { r: 204, g: 102, b: 102 }
  },
  {
    name: 'Gainsboro',
    hex: '#dcdcdc',
    rgb: { r: 220, g: 220, b: 220 }
  },
  {
    name: 'Ghost White',
    hex: '#f8f8ff',
    rgb: { r: 248, g: 248, b: 255 }
  },
  { name: 'Ginger', hex: '#b06500', rgb: { r: 176, g: 101, b: 0 } },
  {
    name: 'Glaucous',
    hex: '#6082b6',
    rgb: { r: 96, g: 130, b: 182 }
  },
  {
    name: 'Glitter',
    hex: '#e6e8fa',
    rgb: { r: 230, g: 232, b: 250 }
  },
  {
    name: 'Golden Brown',
    hex: '#996515',
    rgb: { r: 153, g: 101, b: 21 }
  },
  {
    name: 'Golden Poppy',
    hex: '#fcc200',
    rgb: { r: 252, g: 194, b: 0 }
  },
  {
    name: 'Golden Yellow',
    hex: '#ffdf00',
    rgb: { r: 255, g: 223, b: 0 }
  },
  {
    name: 'Green Blue',
    hex: '#1164b4',
    rgb: { r: 17, g: 100, b: 180 }
  },
  {
    name: 'Green Yellow',
    hex: '#adff2f',
    rgb: { r: 173, g: 255, b: 47 }
  },
  {
    name: 'Grullo',
    hex: '#a99a86',
    rgb: { r: 169, g: 154, b: 134 }
  },
  {
    name: 'Guppie Green',
    hex: '#00ff7f',
    rgb: { r: 0, g: 255, b: 127 }
  },
  {
    name: 'Halayà Úbe',
    hex: '#663854',
    rgb: { r: 102, g: 56, b: 84 }
  },
  {
    name: 'Han Blue',
    hex: '#446ccf',
    rgb: { r: 68, g: 108, b: 207 }
  },
  {
    name: 'Han Purple',
    hex: '#5218fa',
    rgb: { r: 82, g: 24, b: 250 }
  },
  {
    name: 'Hansa Yellow',
    hex: '#e9d66b',
    rgb: { r: 233, g: 214, b: 107 }
  },
  {
    name: 'Harvard Crimson',
    hex: '#c90016',
    rgb: { r: 201, g: 0, b: 22 }
  },
  {
    name: 'Hollywood Cerise',
    hex: '#f400a1',
    rgb: { r: 244, g: 0, b: 161 }
  },
  {
    name: 'Honeydew',
    hex: '#f0fff0',
    rgb: { r: 240, g: 255, b: 240 }
  },
  {
    name: 'Hooker Green',
    hex: '#49796b',
    rgb: { r: 73, g: 121, b: 107 }
  },
  {
    name: 'Hot Magenta',
    hex: '#ff1dce',
    rgb: { r: 255, g: 29, b: 206 }
  },
  {
    name: 'Hot Pink',
    hex: '#ff69b4',
    rgb: { r: 255, g: 105, b: 180 }
  },
  {
    name: 'Hunter Green',
    hex: '#355e3b',
    rgb: { r: 53, g: 94, b: 59 }
  },
  {
    name: 'Icterine',
    hex: '#fcf75e',
    rgb: { r: 252, g: 247, b: 94 }
  },
  {
    name: 'Inchworm',
    hex: '#b2ec5d',
    rgb: { r: 178, g: 236, b: 93 }
  },
  {
    name: 'India Green',
    hex: '#138808',
    rgb: { r: 19, g: 136, b: 8 }
  },
  {
    name: 'Indian Red',
    hex: '#cd5c5c',
    rgb: { r: 205, g: 92, b: 92 }
  },
  {
    name: 'Indian Yellow',
    hex: '#e3a857',
    rgb: { r: 227, g: 168, b: 87 }
  },
  {
    name: 'International Orange',
    hex: '#ff4f00',
    rgb: { r: 255, g: 79, b: 0 }
  },
  { name: 'Iris', hex: '#5a4fcf', rgb: { r: 90, g: 79, b: 207 } },
  {
    name: 'Isabelline',
    hex: '#f4f0ec',
    rgb: { r: 244, g: 240, b: 236 }
  },
  {
    name: 'Islamic Green',
    hex: '#009000',
    rgb: { r: 0, g: 144, b: 0 }
  },
  {
    name: 'Jasmine',
    hex: '#f8de7e',
    rgb: { r: 248, g: 222, b: 126 }
  },
  { name: 'Jasper', hex: '#d73b3e', rgb: { r: 215, g: 59, b: 62 } },
  {
    name: 'Jazzberry Jam',
    hex: '#a50b5e',
    rgb: { r: 165, g: 11, b: 94 }
  },
  {
    name: 'June Bud',
    hex: '#bdda57',
    rgb: { r: 189, g: 218, b: 87 }
  },
  {
    name: 'Jungle Green',
    hex: '#29ab87',
    rgb: { r: 41, g: 171, b: 135 }
  },
  {
    name: 'Kelly Green',
    hex: '#4cbb17',
    rgb: { r: 76, g: 187, b: 23 }
  },
  {
    name: 'KU Crimson',
    hex: '#e8000d',
    rgb: { r: 232, g: 0, b: 13 }
  },
  {
    name: 'La Salle Green',
    hex: '#087830',
    rgb: { r: 8, g: 120, b: 48 }
  },
  {
    name: 'Languid Lavender',
    hex: '#d6cadd',
    rgb: { r: 214, g: 202, b: 221 }
  },
  {
    name: 'Lapis Lazuli',
    hex: '#26619c',
    rgb: { r: 38, g: 97, b: 156 }
  },
  {
    name: 'Laurel Green',
    hex: '#a9ba9d',
    rgb: { r: 169, g: 186, b: 157 }
  },
  { name: 'Lava', hex: '#cf1020', rgb: { r: 207, g: 16, b: 32 } },
  {
    name: 'Lavender Blue',
    hex: '#ccccff',
    rgb: { r: 204, g: 204, b: 255 }
  },
  {
    name: 'Lavender Gray',
    hex: '#c4c3d0',
    rgb: { r: 196, g: 195, b: 208 }
  },
  {
    name: 'Lavender Indigo',
    hex: '#9457eb',
    rgb: { r: 148, g: 87, b: 235 }
  },
  {
    name: 'Lavender Magenta',
    hex: '#ee82ee',
    rgb: { r: 238, g: 130, b: 238 }
  },
  {
    name: 'Lavender Mist',
    hex: '#e6e6fa',
    rgb: { r: 230, g: 230, b: 250 }
  },
  {
    name: 'Lavender Pink',
    hex: '#fbaed2',
    rgb: { r: 251, g: 174, b: 210 }
  },
  {
    name: 'Lavender Purple',
    hex: '#967bb6',
    rgb: { r: 150, g: 123, b: 182 }
  },
  {
    name: 'Lavender Rose',
    hex: '#fba0e3',
    rgb: { r: 251, g: 160, b: 227 }
  },
  {
    name: 'Lawn Green',
    hex: '#7cfc00',
    rgb: { r: 124, g: 252, b: 0 }
  },
  {
    name: 'Lemon Chiffon',
    hex: '#fffacd',
    rgb: { r: 255, g: 250, b: 205 }
  },
  {
    name: 'Lemon Lime',
    hex: '#bfff00',
    rgb: { r: 191, g: 255, b: 0 }
  },
  {
    name: 'Lemon Yellow',
    hex: '#fff44f',
    rgb: { r: 255, g: 244, b: 79 }
  },
  {
    name: 'Light Apricot',
    hex: '#fdd5b1',
    rgb: { r: 253, g: 213, b: 177 }
  },
  {
    name: 'Light Blue',
    hex: '#add8e6',
    rgb: { r: 173, g: 216, b: 230 }
  },
  {
    name: 'Light Brown',
    hex: '#b5651d',
    rgb: { r: 181, g: 101, b: 29 }
  },
  {
    name: 'Light Carmine Pink',
    hex: '#e66771',
    rgb: { r: 230, g: 103, b: 113 }
  },
  {
    name: 'Light Coral',
    hex: '#f08080',
    rgb: { r: 240, g: 128, b: 128 }
  },
  {
    name: 'Light Cornflower Blue',
    hex: '#93ccea',
    rgb: { r: 147, g: 204, b: 234 }
  },
  {
    name: 'Light Crimson',
    hex: '#f56991',
    rgb: { r: 245, g: 105, b: 145 }
  },
  {
    name: 'Light Cyan',
    hex: '#e0ffff',
    rgb: { r: 224, g: 255, b: 255 }
  },
  {
    name: 'Light Fuchsia Pink',
    hex: '#f984ef',
    rgb: { r: 249, g: 132, b: 239 }
  },
  {
    name: 'Light Goldenrod Yellow',
    hex: '#fafad2',
    rgb: { r: 250, g: 250, b: 210 }
  },
  {
    name: 'Light Gray',
    hex: '#d3d3d3',
    rgb: { r: 211, g: 211, b: 211 }
  },
  {
    name: 'Light Green',
    hex: '#90ee90',
    rgb: { r: 144, g: 238, b: 144 }
  },
  {
    name: 'Light Khaki',
    hex: '#f0e68c',
    rgb: { r: 240, g: 230, b: 140 }
  },
  {
    name: 'Light Pastel Purple',
    hex: '#b19cd9',
    rgb: { r: 177, g: 156, b: 217 }
  },
  {
    name: 'Light Pink',
    hex: '#ffb6c1',
    rgb: { r: 255, g: 182, b: 193 }
  },
  {
    name: 'Light Salmon',
    hex: '#ffa07a',
    rgb: { r: 255, g: 160, b: 122 }
  },
  {
    name: 'Light Salmon Pink',
    hex: '#ff9999',
    rgb: { r: 255, g: 153, b: 153 }
  },
  {
    name: 'Light Sea Green',
    hex: '#20b2aa',
    rgb: { r: 32, g: 178, b: 170 }
  },
  {
    name: 'Light Sky Blue',
    hex: '#87cefa',
    rgb: { r: 135, g: 206, b: 250 }
  },
  {
    name: 'Light Slate Gray',
    hex: '#778899',
    rgb: { r: 119, g: 136, b: 153 }
  },
  {
    name: 'Light Taupe',
    hex: '#b38b6d',
    rgb: { r: 179, g: 139, b: 109 }
  },
  {
    name: 'Light Thulian Pink',
    hex: '#e68fac',
    rgb: { r: 230, g: 143, b: 172 }
  },
  {
    name: 'Light Yellow',
    hex: '#ffffed',
    rgb: { r: 255, g: 255, b: 237 }
  },
  {
    name: 'Lime Green',
    hex: '#32cd32',
    rgb: { r: 50, g: 205, b: 50 }
  },
  {
    name: 'Lincoln Green',
    hex: '#195905',
    rgb: { r: 25, g: 89, b: 5 }
  },
  { name: 'Lion', hex: '#c19a6b', rgb: { r: 193, g: 154, b: 107 } },
  { name: 'Liver', hex: '#534b4f', rgb: { r: 83, g: 75, b: 79 } },
  { name: 'Lust', hex: '#e62020', rgb: { r: 230, g: 32, b: 32 } },
  {
    name: 'Magic Mint',
    hex: '#aaf0d1',
    rgb: { r: 170, g: 240, b: 209 }
  },
  {
    name: 'Majorelle Blue',
    hex: '#6050dc',
    rgb: { r: 96, g: 80, b: 220 }
  },
  {
    name: 'Mauve Taupe',
    hex: '#915f6d',
    rgb: { r: 145, g: 95, b: 109 }
  },
  {
    name: 'Maya Blue',
    hex: '#73c2fb',
    rgb: { r: 115, g: 194, b: 251 }
  },
  {
    name: 'Meat Brown',
    hex: '#e5b73b',
    rgb: { r: 229, g: 183, b: 59 }
  },
  {
    name: 'Medium Aquamarine',
    hex: '#66ddaa',
    rgb: { r: 102, g: 221, b: 170 }
  },
  {
    name: 'Medium Blue',
    hex: '#0000cd',
    rgb: { r: 0, g: 0, b: 205 }
  },
  {
    name: 'Medium Candy Apple Red',
    hex: '#e2062c',
    rgb: { r: 226, g: 6, b: 44 }
  },
  {
    name: 'Medium Carmine',
    hex: '#af4035',
    rgb: { r: 175, g: 64, b: 53 }
  },
  {
    name: 'Medium Champagne',
    hex: '#f3e5ab',
    rgb: { r: 243, g: 229, b: 171 }
  },
  {
    name: 'Medium Electric Blue',
    hex: '#035096',
    rgb: { r: 3, g: 80, b: 150 }
  },
  {
    name: 'Medium Jungle Green',
    hex: '#1c352d',
    rgb: { r: 28, g: 53, b: 45 }
  },
  {
    name: 'Medium Lavender Magenta',
    hex: '#dda0dd',
    rgb: { r: 221, g: 160, b: 221 }
  },
  {
    name: 'Medium Orchid',
    hex: '#ba55d3',
    rgb: { r: 186, g: 85, b: 211 }
  },
  {
    name: 'Medium Persian Blue',
    hex: '#0067a5',
    rgb: { r: 0, g: 103, b: 165 }
  },
  {
    name: 'Medium Purple',
    hex: '#9370db',
    rgb: { r: 147, g: 112, b: 219 }
  },
  {
    name: 'Medium Red Violet',
    hex: '#bb3385',
    rgb: { r: 187, g: 51, b: 133 }
  },
  {
    name: 'Medium Sea Green',
    hex: '#3cb371',
    rgb: { r: 60, g: 179, b: 113 }
  },
  {
    name: 'Medium Slate Blue',
    hex: '#7b68ee',
    rgb: { r: 123, g: 104, b: 238 }
  },
  {
    name: 'Medium Spring Bud',
    hex: '#c9dc87',
    rgb: { r: 201, g: 220, b: 135 }
  },
  {
    name: 'Medium Spring Green',
    hex: '#00fa9a',
    rgb: { r: 0, g: 250, b: 154 }
  },
  {
    name: 'Medium Taupe',
    hex: '#674c47',
    rgb: { r: 103, g: 76, b: 71 }
  },
  {
    name: 'Medium Teal Blue',
    hex: '#0054b4',
    rgb: { r: 0, g: 84, b: 180 }
  },
  {
    name: 'Medium Turquoise',
    hex: '#48d1cc',
    rgb: { r: 72, g: 209, b: 204 }
  },
  {
    name: 'Medium Violet Red',
    hex: '#c71585',
    rgb: { r: 199, g: 21, b: 133 }
  },
  {
    name: 'Midnight Blue',
    hex: '#191970',
    rgb: { r: 25, g: 25, b: 112 }
  },
  {
    name: 'Midnight Green',
    hex: '#004953',
    rgb: { r: 0, g: 73, b: 83 }
  },
  {
    name: 'Mikado Yellow',
    hex: '#ffc40c',
    rgb: { r: 255, g: 196, b: 12 }
  },
  { name: 'Mint', hex: '#3eb489', rgb: { r: 62, g: 180, b: 137 } },
  {
    name: 'Mint Cream',
    hex: '#f5fffa',
    rgb: { r: 245, g: 255, b: 250 }
  },
  {
    name: 'Mint Green',
    hex: '#98ff98',
    rgb: { r: 152, g: 255, b: 152 }
  },
  {
    name: 'Misty Rose',
    hex: '#ffe4e1',
    rgb: { r: 255, g: 228, b: 225 }
  },
  {
    name: 'Moccasin',
    hex: '#faebd7',
    rgb: { r: 250, g: 235, b: 215 }
  },
  {
    name: 'Moonstone Blue',
    hex: '#73a9c2',
    rgb: { r: 115, g: 169, b: 194 }
  },
  {
    name: 'Mordant Red 19',
    hex: '#ae0c00',
    rgb: { r: 174, g: 12, b: 0 }
  },
  {
    name: 'Moss Green',
    hex: '#addfad',
    rgb: { r: 173, g: 223, b: 173 }
  },
  {
    name: 'Mountbatten Pink',
    hex: '#997a8d',
    rgb: { r: 153, g: 122, b: 141 }
  },
  {
    name: 'MSU Green',
    hex: '#18453b',
    rgb: { r: 24, g: 69, b: 59 }
  },
  {
    name: 'Munsell',
    hex: '#f2f3f4',
    rgb: { r: 242, g: 243, b: 244 }
  },
  { name: 'Myrtle', hex: '#21421e', rgb: { r: 33, g: 66, b: 30 } },
  {
    name: 'Nadeshiko Pink',
    hex: '#f6adc6',
    rgb: { r: 246, g: 173, b: 198 }
  },
  {
    name: 'Napier Green',
    hex: '#2a8000',
    rgb: { r: 42, g: 128, b: 0 }
  },
  {
    name: 'Naples Yellow',
    hex: '#fada5e',
    rgb: { r: 250, g: 218, b: 94 }
  },
  {
    name: 'Navajo White',
    hex: '#ffdead',
    rgb: { r: 255, g: 222, b: 173 }
  },
  {
    name: 'Neon Fuchsia',
    hex: '#fe59c2',
    rgb: { r: 254, g: 89, b: 194 }
  },
  {
    name: 'Neon Green',
    hex: '#39ff14',
    rgb: { r: 57, g: 255, b: 20 }
  },
  {
    name: 'Non-photo Blue',
    hex: '#a4dded',
    rgb: { r: 164, g: 221, b: 237 }
  },
  {
    name: 'North Texas Green',
    hex: '#059033',
    rgb: { r: 5, g: 144, b: 51 }
  },
  {
    name: 'Ocean Boat Blue',
    hex: '#0077be',
    rgb: { r: 0, g: 119, b: 190 }
  },
  {
    name: 'Old Gold',
    hex: '#cfb53b',
    rgb: { r: 207, g: 181, b: 59 }
  },
  {
    name: 'Old Lace',
    hex: '#fdf5e6',
    rgb: { r: 253, g: 245, b: 230 }
  },
  {
    name: 'Old Mauve',
    hex: '#673147',
    rgb: { r: 103, g: 49, b: 71 }
  },
  {
    name: 'Old Rose',
    hex: '#c08081',
    rgb: { r: 192, g: 128, b: 129 }
  },
  { name: 'Onyx', hex: '#0f0f0f', rgb: { r: 15, g: 15, b: 15 } },
  {
    name: 'Opera Mauve',
    hex: '#b784a7',
    rgb: { r: 183, g: 132, b: 167 }
  },
  {
    name: 'Orange Peel',
    hex: '#ff9f00',
    rgb: { r: 255, g: 159, b: 0 }
  },
  {
    name: 'Orange Red',
    hex: '#ff4500',
    rgb: { r: 255, g: 69, b: 0 }
  },
  {
    name: 'Orange Yellow',
    hex: '#f8d568',
    rgb: { r: 248, g: 213, b: 104 }
  },
  {
    name: 'Pakistan Green',
    hex: '#006600',
    rgb: { r: 0, g: 102, b: 0 }
  },
  {
    name: 'Palatinate Blue',
    hex: '#273be2',
    rgb: { r: 39, g: 59, b: 226 }
  },
  {
    name: 'Palatinate Purple',
    hex: '#682860',
    rgb: { r: 104, g: 40, b: 96 }
  },
  {
    name: 'Pale Aqua',
    hex: '#bcd4e6',
    rgb: { r: 188, g: 212, b: 230 }
  },
  {
    name: 'Pale Blue',
    hex: '#afeeee',
    rgb: { r: 175, g: 238, b: 238 }
  },
  {
    name: 'Pale Brown',
    hex: '#987654',
    rgb: { r: 152, g: 118, b: 84 }
  },
  {
    name: 'Pale Cerulean',
    hex: '#9bc4e2',
    rgb: { r: 155, g: 196, b: 226 }
  },
  {
    name: 'Pale Chestnut',
    hex: '#ddadaf',
    rgb: { r: 221, g: 173, b: 175 }
  },
  {
    name: 'Pale Copper',
    hex: '#da8a67',
    rgb: { r: 218, g: 138, b: 103 }
  },
  {
    name: 'Pale Cornflower Blue',
    hex: '#abcdef',
    rgb: { r: 171, g: 205, b: 239 }
  },
  {
    name: 'Pale Gold',
    hex: '#e6be8a',
    rgb: { r: 230, g: 190, b: 138 }
  },
  {
    name: 'Pale Goldenrod',
    hex: '#eee8aa',
    rgb: { r: 238, g: 232, b: 170 }
  },
  {
    name: 'Pale Green',
    hex: '#98fb98',
    rgb: { r: 152, g: 251, b: 152 }
  },
  {
    name: 'Pale Lavender',
    hex: '#dcd0ff',
    rgb: { r: 220, g: 208, b: 255 }
  },
  {
    name: 'Pale Magenta',
    hex: '#f984e5',
    rgb: { r: 249, g: 132, b: 229 }
  },
  {
    name: 'Pale Pink',
    hex: '#fadadd',
    rgb: { r: 250, g: 218, b: 221 }
  },
  {
    name: 'Pale Red Violet',
    hex: '#db7093',
    rgb: { r: 219, g: 112, b: 147 }
  },
  {
    name: 'Pale Robin Egg Blue',
    hex: '#96ded1',
    rgb: { r: 150, g: 222, b: 209 }
  },
  {
    name: 'Pale Silver',
    hex: '#c9c0bb',
    rgb: { r: 201, g: 192, b: 187 }
  },
  {
    name: 'Pale Spring Bud',
    hex: '#ecebbd',
    rgb: { r: 236, g: 235, b: 189 }
  },
  {
    name: 'Pale Taupe',
    hex: '#bc987e',
    rgb: { r: 188, g: 152, b: 126 }
  },
  {
    name: 'Pansy Purple',
    hex: '#78184a',
    rgb: { r: 120, g: 24, b: 74 }
  },
  {
    name: 'Papaya Whip',
    hex: '#ffefd5',
    rgb: { r: 255, g: 239, b: 213 }
  },
  {
    name: 'Paris Green',
    hex: '#50c878',
    rgb: { r: 80, g: 200, b: 120 }
  },
  {
    name: 'Pastel Blue',
    hex: '#aec6cf',
    rgb: { r: 174, g: 198, b: 207 }
  },
  {
    name: 'Pastel Brown',
    hex: '#836953',
    rgb: { r: 131, g: 105, b: 83 }
  },
  {
    name: 'Pastel Gray',
    hex: '#cfcfc4',
    rgb: { r: 207, g: 207, b: 196 }
  },
  {
    name: 'Pastel Green',
    hex: '#77dd77',
    rgb: { r: 119, g: 221, b: 119 }
  },
  {
    name: 'Pastel Magenta',
    hex: '#f49ac2',
    rgb: { r: 244, g: 154, b: 194 }
  },
  {
    name: 'Pastel Orange',
    hex: '#ffb347',
    rgb: { r: 255, g: 179, b: 71 }
  },
  {
    name: 'Pastel Pink',
    hex: '#ffd1dc',
    rgb: { r: 255, g: 209, b: 220 }
  },
  {
    name: 'Pastel Purple',
    hex: '#b39eb5',
    rgb: { r: 179, g: 158, b: 181 }
  },
  {
    name: 'Pastel Red',
    hex: '#ff6961',
    rgb: { r: 255, g: 105, b: 97 }
  },
  {
    name: 'Pastel Violet',
    hex: '#cb99c9',
    rgb: { r: 203, g: 153, b: 201 }
  },
  {
    name: 'Pastel Yellow',
    hex: '#fdfd96',
    rgb: { r: 253, g: 253, b: 150 }
  },
  {
    name: 'Patriarch',
    hex: '#800080',
    rgb: { r: 128, g: 0, b: 128 }
  },
  {
    name: 'Peach Puff',
    hex: '#ffdab9',
    rgb: { r: 255, g: 218, b: 185 }
  },
  {
    name: 'Peach Yellow',
    hex: '#fadfad',
    rgb: { r: 250, g: 223, b: 173 }
  },
  {
    name: 'Pearl',
    hex: '#eae0c8',
    rgb: { r: 234, g: 224, b: 200 }
  },
  {
    name: 'Pearl Aqua',
    hex: '#88d8c0',
    rgb: { r: 136, g: 216, b: 192 }
  },
  {
    name: 'Peridot',
    hex: '#e6e200',
    rgb: { r: 230, g: 226, b: 0 }
  },
  {
    name: 'Persian Blue',
    hex: '#1c39bb',
    rgb: { r: 28, g: 57, b: 187 }
  },
  {
    name: 'Persian Indigo',
    hex: '#32127a',
    rgb: { r: 50, g: 18, b: 122 }
  },
  {
    name: 'Persian Orange',
    hex: '#d99058',
    rgb: { r: 217, g: 144, b: 88 }
  },
  {
    name: 'Persian Pink',
    hex: '#f77fbe',
    rgb: { r: 247, g: 127, b: 190 }
  },
  {
    name: 'Persian Plum',
    hex: '#701c1c',
    rgb: { r: 112, g: 28, b: 28 }
  },
  {
    name: 'Persian Red',
    hex: '#cc3333',
    rgb: { r: 204, g: 51, b: 51 }
  },
  {
    name: 'Persian Rose',
    hex: '#fe28a2',
    rgb: { r: 254, g: 40, b: 162 }
  },
  { name: 'Phlox', hex: '#df00ff', rgb: { r: 223, g: 0, b: 255 } },
  {
    name: 'Phthalo Blue',
    hex: '#000f89',
    rgb: { r: 0, g: 15, b: 137 }
  },
  {
    name: 'Phthalo Green',
    hex: '#123524',
    rgb: { r: 18, g: 53, b: 36 }
  },
  {
    name: 'Piggy Pink',
    hex: '#fddde6',
    rgb: { r: 253, g: 221, b: 230 }
  },
  {
    name: 'Pine Green',
    hex: '#01796f',
    rgb: { r: 1, g: 121, b: 111 }
  },
  {
    name: 'Pink Pearl',
    hex: '#e7accf',
    rgb: { r: 231, g: 172, b: 207 }
  },
  {
    name: 'Pink Sherbet',
    hex: '#f78fa7',
    rgb: { r: 247, g: 143, b: 167 }
  },
  {
    name: 'Platinum',
    hex: '#e5e4e2',
    rgb: { r: 229, g: 228, b: 226 }
  },
  {
    name: 'Portland Orange',
    hex: '#ff5a36',
    rgb: { r: 255, g: 90, b: 54 }
  },
  {
    name: 'Powder Blue',
    hex: '#b0e0e6',
    rgb: { r: 176, g: 224, b: 230 }
  },
  {
    name: 'Princeton Orange',
    hex: '#ff8f00',
    rgb: { r: 255, g: 143, b: 0 }
  },
  {
    name: 'Purple Mountain Majesty',
    hex: '#9678b6',
    rgb: { r: 150, g: 120, b: 182 }
  },
  {
    name: 'Purple Pizzazz',
    hex: '#fe4eda',
    rgb: { r: 254, g: 78, b: 218 }
  },
  {
    name: 'Purple Taupe',
    hex: '#50404d',
    rgb: { r: 80, g: 64, b: 77 }
  },
  {
    name: 'Raspberry',
    hex: '#e30b5d',
    rgb: { r: 227, g: 11, b: 93 }
  },
  {
    name: 'Raspberry Pink',
    hex: '#e25098',
    rgb: { r: 226, g: 80, b: 152 }
  },
  {
    name: 'Raspberry Rose',
    hex: '#b3446c',
    rgb: { r: 179, g: 68, b: 108 }
  },
  {
    name: 'Razzle Dazzle Rose',
    hex: '#ff33cc',
    rgb: { r: 255, g: 51, b: 204 }
  },
  {
    name: 'Red Brown',
    hex: '#a52a2a',
    rgb: { r: 165, g: 42, b: 42 }
  },
  {
    name: 'Rich Black',
    hex: '#004040',
    rgb: { r: 0, g: 64, b: 64 }
  },
  {
    name: 'Rich Carmine',
    hex: '#d70040',
    rgb: { r: 215, g: 0, b: 64 }
  },
  {
    name: 'Rich Electric Blue',
    hex: '#0892d0',
    rgb: { r: 8, g: 146, b: 208 }
  },
  {
    name: 'Rich Lilac',
    hex: '#b666d2',
    rgb: { r: 182, g: 102, b: 210 }
  },
  {
    name: 'Rich Maroon',
    hex: '#b03060',
    rgb: { r: 176, g: 48, b: 96 }
  },
  {
    name: 'Rifle Green',
    hex: '#414833',
    rgb: { r: 65, g: 72, b: 51 }
  },
  {
    name: 'Rose Bonbon',
    hex: '#f9429e',
    rgb: { r: 249, g: 66, b: 158 }
  },
  {
    name: 'Rose Ebony',
    hex: '#674846',
    rgb: { r: 103, g: 72, b: 70 }
  },
  {
    name: 'Rose Gold',
    hex: '#b76e79',
    rgb: { r: 183, g: 110, b: 121 }
  },
  {
    name: 'Rose Pink',
    hex: '#ff66cc',
    rgb: { r: 255, g: 102, b: 204 }
  },
  {
    name: 'Rose Quartz',
    hex: '#aa98a9',
    rgb: { r: 170, g: 152, b: 169 }
  },
  {
    name: 'Rose Taupe',
    hex: '#905d5d',
    rgb: { r: 144, g: 93, b: 93 }
  },
  {
    name: 'Rose Vale',
    hex: '#ab4e52',
    rgb: { r: 171, g: 78, b: 82 }
  },
  {
    name: 'Rosso Corsa',
    hex: '#d40000',
    rgb: { r: 212, g: 0, b: 0 }
  },
  {
    name: 'Rosy Brown',
    hex: '#bc8f8f',
    rgb: { r: 188, g: 143, b: 143 }
  },
  {
    name: 'Royal Azure',
    hex: '#0038a8',
    rgb: { r: 0, g: 56, b: 168 }
  },
  {
    name: 'Royal Blue',
    hex: '#4169e1',
    rgb: { r: 65, g: 105, b: 225 }
  },
  {
    name: 'Royal Fuchsia',
    hex: '#ca2c92',
    rgb: { r: 202, g: 44, b: 146 }
  },
  {
    name: 'Royal Purple',
    hex: '#7851a9',
    rgb: { r: 120, g: 81, b: 169 }
  },
  { name: 'Ruby', hex: '#e0115f', rgb: { r: 224, g: 17, b: 95 } },
  { name: 'Ruddy', hex: '#ff0028', rgb: { r: 255, g: 0, b: 40 } },
  {
    name: 'Ruddy Brown',
    hex: '#bb6528',
    rgb: { r: 187, g: 101, b: 40 }
  },
  {
    name: 'Ruddy Pink',
    hex: '#e18e96',
    rgb: { r: 225, g: 142, b: 150 }
  },
  { name: 'Rufous', hex: '#a81c07', rgb: { r: 168, g: 28, b: 7 } },
  {
    name: 'Sacramento State Green',
    hex: '#00563f',
    rgb: { r: 0, g: 86, b: 63 }
  },
  {
    name: 'Saddle Brown',
    hex: '#8b4513',
    rgb: { r: 139, g: 69, b: 19 }
  },
  {
    name: 'Safety Orange',
    hex: '#ff6700',
    rgb: { r: 255, g: 103, b: 0 }
  },
  {
    name: 'Saint Patrick Blue',
    hex: '#23297a',
    rgb: { r: 35, g: 41, b: 122 }
  },
  {
    name: 'Salmon Pink',
    hex: '#ff91a4',
    rgb: { r: 255, g: 145, b: 164 }
  },
  { name: 'Sand', hex: '#c2b280', rgb: { r: 194, g: 178, b: 128 } },
  {
    name: 'Sandstorm',
    hex: '#ecd540',
    rgb: { r: 236, g: 213, b: 64 }
  },
  {
    name: 'Sap Green',
    hex: '#507d2a',
    rgb: { r: 80, g: 125, b: 42 }
  },
  {
    name: 'Satin Sheen Gold',
    hex: '#cba135',
    rgb: { r: 203, g: 161, b: 53 }
  },
  {
    name: 'School Bus Yellow',
    hex: '#ffd800',
    rgb: { r: 255, g: 216, b: 0 }
  },
  {
    name: 'Screamin Green',
    hex: '#76ff7a',
    rgb: { r: 118, g: 255, b: 122 }
  },
  {
    name: 'Sea Blue',
    hex: '#006994',
    rgb: { r: 0, g: 105, b: 148 }
  },
  {
    name: 'Sea Green',
    hex: '#2e8b57',
    rgb: { r: 46, g: 139, b: 87 }
  },
  {
    name: 'Seal Brown',
    hex: '#321414',
    rgb: { r: 50, g: 20, b: 20 }
  },
  {
    name: 'Selective Yellow',
    hex: '#ffba00',
    rgb: { r: 255, g: 186, b: 0 }
  },
  {
    name: 'Shamrock Green',
    hex: '#009e60',
    rgb: { r: 0, g: 158, b: 96 }
  },
  {
    name: 'Shocking Pink',
    hex: '#fc0fc0',
    rgb: { r: 252, g: 15, b: 192 }
  },
  { name: 'Sienna', hex: '#882d17', rgb: { r: 136, g: 45, b: 23 } },
  {
    name: 'Sinopia',
    hex: '#cb410b',
    rgb: { r: 203, g: 65, b: 11 }
  },
  {
    name: 'Skobeloff',
    hex: '#007474',
    rgb: { r: 0, g: 116, b: 116 }
  },
  {
    name: 'Sky Blue',
    hex: '#87ceeb',
    rgb: { r: 135, g: 206, b: 235 }
  },
  {
    name: 'Sky Magenta',
    hex: '#cf71af',
    rgb: { r: 207, g: 113, b: 175 }
  },
  {
    name: 'Slate Blue',
    hex: '#6a5acd',
    rgb: { r: 106, g: 90, b: 205 }
  },
  {
    name: 'Smokey Topaz',
    hex: '#933d41',
    rgb: { r: 147, g: 61, b: 65 }
  },
  {
    name: 'Smoky Black',
    hex: '#100c08',
    rgb: { r: 16, g: 12, b: 8 }
  },
  { name: 'Snow', hex: '#fffafa', rgb: { r: 255, g: 250, b: 250 } },
  {
    name: 'Spiro Disco Ball',
    hex: '#0fc0fc',
    rgb: { r: 15, g: 192, b: 252 }
  },
  {
    name: 'Spring Bud',
    hex: '#a7fc00',
    rgb: { r: 167, g: 252, b: 0 }
  },
  {
    name: 'Steel Blue',
    hex: '#4682b4',
    rgb: { r: 70, g: 130, b: 180 }
  },
  {
    name: 'Sunset',
    hex: '#fad6a5',
    rgb: { r: 250, g: 214, b: 165 }
  },
  { name: 'Tangelo', hex: '#f94d00', rgb: { r: 249, g: 77, b: 0 } },
  {
    name: 'Tangerine Yellow',
    hex: '#ffcc00',
    rgb: { r: 255, g: 204, b: 0 }
  },
  {
    name: 'Taupe Gray',
    hex: '#8b8589',
    rgb: { r: 139, g: 133, b: 137 }
  },
  { name: 'Tawny', hex: '#cd5700', rgb: { r: 205, g: 87, b: 0 } },
  {
    name: 'Tea Green',
    hex: '#d0f0c0',
    rgb: { r: 208, g: 240, b: 192 }
  },
  {
    name: 'Tea Rose',
    hex: '#f4c2c2',
    rgb: { r: 244, g: 194, b: 194 }
  },
  {
    name: 'Teal Blue',
    hex: '#367588',
    rgb: { r: 54, g: 117, b: 136 }
  },
  {
    name: 'Teal Green',
    hex: '#006d5b',
    rgb: { r: 0, g: 109, b: 91 }
  },
  {
    name: 'Terra Cotta',
    hex: '#e2725b',
    rgb: { r: 226, g: 114, b: 91 }
  },
  {
    name: 'Thulian Pink',
    hex: '#de6fa1',
    rgb: { r: 222, g: 111, b: 161 }
  },
  {
    name: 'Tiffany Blue',
    hex: '#0abab5',
    rgb: { r: 10, g: 186, b: 181 }
  },
  {
    name: 'Tiger Eye',
    hex: '#e08d3c',
    rgb: { r: 224, g: 141, b: 60 }
  },
  {
    name: 'Titanium Yellow',
    hex: '#eee600',
    rgb: { r: 238, g: 230, b: 0 }
  },
  { name: 'Tomato', hex: '#ff6347', rgb: { r: 255, g: 99, b: 71 } },
  {
    name: 'Toolbox',
    hex: '#746cc0',
    rgb: { r: 116, g: 108, b: 192 }
  },
  {
    name: 'Tractor Red',
    hex: '#fd0e35',
    rgb: { r: 253, g: 14, b: 53 }
  },
  {
    name: 'Tropical Rain Forest',
    hex: '#00755e',
    rgb: { r: 0, g: 117, b: 94 }
  },
  {
    name: 'True Blue',
    hex: '#0073cf',
    rgb: { r: 0, g: 115, b: 207 }
  },
  {
    name: 'Tufts Blue',
    hex: '#417dc1',
    rgb: { r: 65, g: 125, b: 193 }
  },
  {
    name: 'Turkish Rose',
    hex: '#b57281',
    rgb: { r: 181, g: 114, b: 129 }
  },
  {
    name: 'Turquoise Blue',
    hex: '#00ffef',
    rgb: { r: 0, g: 255, b: 239 }
  },
  {
    name: 'Turquoise Green',
    hex: '#a0d6b4',
    rgb: { r: 160, g: 214, b: 180 }
  },
  {
    name: 'Tuscan Red',
    hex: '#66424d',
    rgb: { r: 102, g: 66, b: 77 }
  },
  {
    name: 'Twilight Lavender',
    hex: '#8a496b',
    rgb: { r: 138, g: 73, b: 107 }
  },
  {
    name: 'Tyrian Purple',
    hex: '#66023c',
    rgb: { r: 102, g: 2, b: 60 }
  },
  { name: 'UA Blue', hex: '#0033aa', rgb: { r: 0, g: 51, b: 170 } },
  { name: 'UA Red', hex: '#d9004c', rgb: { r: 217, g: 0, b: 76 } },
  { name: 'Ube', hex: '#8878c3', rgb: { r: 136, g: 120, b: 195 } },
  {
    name: 'UCLA Blue',
    hex: '#536895',
    rgb: { r: 83, g: 104, b: 149 }
  },
  {
    name: 'UCLA Gold',
    hex: '#ffb300',
    rgb: { r: 255, g: 179, b: 0 }
  },
  {
    name: 'UFO Green',
    hex: '#3cd070',
    rgb: { r: 60, g: 208, b: 112 }
  },
  {
    name: 'Ultra Pink',
    hex: '#ff6fff',
    rgb: { r: 255, g: 111, b: 255 }
  },
  {
    name: 'Ultramarine Blue',
    hex: '#4166f5',
    rgb: { r: 65, g: 102, b: 245 }
  },
  { name: 'Umber', hex: '#635147', rgb: { r: 99, g: 81, b: 71 } },
  {
    name: 'United Nations Blue',
    hex: '#5b92e5',
    rgb: { r: 91, g: 146, b: 229 }
  },
  {
    name: 'University Of California Gold',
    hex: '#b78727',
    rgb: { r: 183, g: 135, b: 39 }
  },
  {
    name: 'Unmellow Yellow',
    hex: '#ffff66',
    rgb: { r: 255, g: 255, b: 102 }
  },
  {
    name: 'UP Maroon',
    hex: '#7b1113',
    rgb: { r: 123, g: 17, b: 19 }
  },
  {
    name: 'Upsdell Red',
    hex: '#ae2029',
    rgb: { r: 174, g: 32, b: 41 }
  },
  {
    name: 'Urobilin',
    hex: '#e1ad21',
    rgb: { r: 225, g: 173, b: 33 }
  },
  {
    name: 'Utah Crimson',
    hex: '#d3003f',
    rgb: { r: 211, g: 0, b: 63 }
  },
  {
    name: 'Vegas Gold',
    hex: '#c5b358',
    rgb: { r: 197, g: 179, b: 88 }
  },
  {
    name: 'Venetian Red',
    hex: '#c80815',
    rgb: { r: 200, g: 8, b: 21 }
  },
  {
    name: 'Veronica',
    hex: '#a020f0',
    rgb: { r: 160, g: 32, b: 240 }
  },
  {
    name: 'Violet Blue',
    hex: '#324ab2',
    rgb: { r: 50, g: 74, b: 178 }
  },
  {
    name: 'Vivid Auburn',
    hex: '#922724',
    rgb: { r: 146, g: 39, b: 36 }
  },
  {
    name: 'Vivid Burgundy',
    hex: '#9f1d35',
    rgb: { r: 159, g: 29, b: 53 }
  },
  {
    name: 'Vivid Cerise',
    hex: '#da1d81',
    rgb: { r: 218, g: 29, b: 129 }
  },
  {
    name: 'Vivid Tangerine',
    hex: '#ffa089',
    rgb: { r: 255, g: 160, b: 137 }
  },
  {
    name: 'Vivid Violet',
    hex: '#9f00ff',
    rgb: { r: 159, g: 0, b: 255 }
  },
  {
    name: 'Warm Black',
    hex: '#004242',
    rgb: { r: 0, g: 66, b: 66 }
  },
  { name: 'Wenge', hex: '#645452', rgb: { r: 100, g: 84, b: 82 } },
  {
    name: 'White Smoke',
    hex: '#f5f5f5',
    rgb: { r: 245, g: 245, b: 245 }
  },
  {
    name: 'Wild Blue Yonder',
    hex: '#a2add0',
    rgb: { r: 162, g: 173, b: 208 }
  },
  { name: 'Wine', hex: '#722f37', rgb: { r: 114, g: 47, b: 55 } },
  {
    name: 'Yale Blue',
    hex: '#0f4d92',
    rgb: { r: 15, g: 77, b: 146 }
  },
  {
    name: 'Yellow Green',
    hex: '#9acd32',
    rgb: { r: 154, g: 205, b: 50 }
  },
  { name: 'Zaffre', hex: '#0014a8', rgb: { r: 0, g: 20, b: 168 } },
  {
    name: 'Zinnwaldite Brown',
    hex: '#2c1608',
    rgb: { r: 44, g: 22, b: 8 }
  }
];

  const hexToRgb = function(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

const colorName = function(hex) {
    const rgb = hexToRgb(hex);

    let distance = 0;
    let minDistance = Infinity;
    let c;
    colors.forEach(color => {
      distance = Math.sqrt(
        (color.rgb.r - rgb.r) ** 2 +
          (color.rgb.g - rgb.g) ** 2 +
          (color.rgb.b - rgb.b) ** 2
      );

      if (distance < minDistance) {
        minDistance = distance;
        c = color;
      }
    });
    return c.name;
  };
  
  
const pickr = Pickr.create({
    el: '.color-picker',
	showAlways: true,
    default: '#0A6C96',
    comparison: false,
    components: {
        hue: true,
        interaction: {
            hex: true,
            input: true,
        }
    },
    onChange(hsva) {
    	const hex = hsva.toHEX();
      const rgb = hsva.toRGBA();
      const color = '#' + hex[0] + hex[1] + hex[2];
      const y = 0.2126*rgb[0] + 0.7152*rgb[1] + 0.0722*rgb[2]
	  	document.querySelector(".color-name").style.color = y > 128 ? '#333' : 'white';
      document.querySelector(".color-name").innerHTML = colorName(color);
      document.querySelector("body").style.backgroundColor = color;
    },

});