const cup_bitmap_lst = [
  [4, 49, "#bebebe"],
  [4, 50, "#c1c1c1"],
  [5, 4, "#ece2b3"],
  [5, 5, "#ecdda7"],
  [5, 6, "#f1e3b9"],
  [5, 7, "#f2e4bb"],
  [5, 8, "#eddfae"],
  [5, 9, "#e8d49e"],
  [5, 10, "#e2ce9d"],
  [5, 11, "#e4dbbb"],
  [5, 49, "#a7a8a8"],
  [5, 50, "#a9a9a9"],
  [6, 2, "#ecdfb9"],
  [6, 3, "#ebd588"],
  [6, 4, "#eddda0"],
  [6, 11, "#ede3c6"],
  [6, 12, "#e9d89d"],
  [6, 13, "#e9d594"],
  [6, 14, "#f4e8c8"],
  [6, 48, "#b7b8bb"],
  [6, 49, "#939495"],
  [6, 50, "#959593"],
  [6, 51, "#babab9"],
  [7, 3, "#f0d384"],
  [7, 4, "#ebd78a"],
  [7, 5, "#ece3b9"],
  [7, 14, "#e8d095"],
  [7, 15, "#e3d7a5"],
  [7, 47, "#b8b4ae"],
  [7, 48, "#685249"],
  [7, 49, "#534139"],
  [7, 50, "#6e635d"],
  [7, 51, "#aaa8a7"],
  [8, 3, "#e8d890"],
  [8, 4, "#f3d264"],
  [8, 5, "#f4d27d"],
  [8, 15, "#ebdec6"],
  [8, 16, "#d7cea9"],
  [8, 46, "#b9aeaa"],
  [8, 47, "#4a3227"],
  [8, 48, "#451f12"],
  [8, 49, "#462317"],
  [8, 50, "#4d3023"],
  [8, 51, "#8e8885"],
  [9, 4, "#eee1b8"],
  [9, 5, "#dfc170"],
  [9, 6, "#d3ba7a"],
  [9, 17, "#d4cf9a"],
  [9, 45, "#d4cac4"],
  [9, 46, "#533e2f"],
  [9, 47, "#412219"],
  [9, 48, "#46261a"],
  [9, 49, "#4a281a"],
  [9, 50, "#56321f"],
  [9, 51, "#71635b"],
  [10, 5, "#ba9b4f"],
  [10, 6, "#b4850c"],
  [10, 7, "#ba8a1d"],
  [10, 8, "#ba8d22"],
  [10, 9, "#bd9322"],
  [10, 10, "#be982a"],
  [10, 11, "#c39f3b"],
  [10, 12, "#c9a54d"],
  [10, 13, "#d2b26c"],
  [10, 14, "#d8c591"],
  [10, 15, "#e4dac0"],
  [10, 18, "#d8d0a0"],
  [10, 39, "#b6a26c"],
  [10, 40, "#8e7019"],
  [10, 41, "#946917"],
  [10, 42, "#8e6b12"],
  [10, 43, "#8c6910"],
  [10, 44, "#89670a"],
  [10, 45, "#8b6509"],
  [10, 46, "#825d04"],
  [10, 47, "#4f2e15"],
  [10, 48, "#44261b"],
  [10, 49, "#462616"],
  [10, 50, "#5c3926"],
  [10, 51, "#664e42"],
  [10, 52, "#c0bdc4"],
  [11, 5, "#dbac2c"],
  [11, 6, "#a98426"],
  [11, 7, "#9f7c28"],
  [11, 8, "#9f741b"],
  [11, 9, "#9a6e14"],
  [11, 10, "#926c08"],
  [11, 11, "#8f6702"],
  [11, 12, "#906202"],
  [11, 13, "#9f6c02"],
  [11, 14, "#b27d06"],
  [11, 15, "#bf8a05"],
  [11, 16, "#c59728"],
  [11, 17, "#d1b56b"],
  [11, 18, "#e9d6b8"],
  [11, 19, "#d7cea8"],
  [11, 37, "#c4c1b9"],
  [11, 38, "#644821"],
  [11, 39, "#976606"],
  [11, 40, "#9e7105"],
  [11, 41, "#b27e07"],
  [11, 42, "#b27e00"],
  [11, 43, "#b37e01"],
  [11, 44, "#b37f03"],
  [11, 45, "#b77f0a"],
  [11, 46, "#ba8808"],
  [11, 47, "#735515"],
  [11, 48, "#43251b"],
  [11, 49, "#462516"],
  [11, 50, "#5b3724"],
  [11, 51, "#674737"],
  [11, 52, "#acabab"],
  [12, 5, "#f7c436"],
  [12, 6, "#fadf8f"],
  [12, 7, "#fbe8a5"],
  [12, 8, "#f9dc8c"],
  [12, 9, "#f5d27d"],
  [12, 10, "#ebc860"],
  [12, 11, "#e2b742"],
  [12, 12, "#d6a52e"],
  [12, 13, "#c19119"],
  [12, 14, "#b28112"],
  [12, 15, "#a5740e"],
  [12, 16, "#9e6e05"],
  [12, 17, "#a36c02"],
  [12, 18, "#af7b13"],
  [12, 19, "#c6aa54"],
  [12, 20, "#cdc18d"],
  [12, 37, "#8e846b"],
  [12, 38, "#4a3300"],
  [12, 39, "#b28817"],
  [12, 40, "#b8820e"],
  [12, 41, "#dda81d"],
  [12, 42, "#e8b121"],
  [12, 43, "#eab62b"],
  [12, 44, "#ecbb32"],
  [12, 45, "#f4be3e"],
  [12, 46, "#fac74d"],
  [12, 47, "#be9d4b"],
  [12, 48, "#46291c"],
  [12, 49, "#48291a"],
  [12, 50, "#54311f"],
  [12, 51, "#643e2d"],
  [12, 52, "#a09896"],
  [13, 5, "#fbcd50"],
  [13, 6, "#fee8a5"],
  [13, 8, "#fdebb9"],
  [13, 9, "#fce9aa"],
  [13, 10, "#fde698"],
  [13, 11, "#ffdf81"],
  [13, 12, "#ffd96d"],
  [13, 13, "#ffd356"],
  [13, 14, "#fecb3d"],
  [13, 15, "#f6bc2a"],
  [13, 16, "#e2a71d"],
  [13, 17, "#bd8a12"],
  [13, 18, "#976c06"],
  [13, 19, "#906801"],
  [13, 20, "#a68120"],
  [13, 21, "#d1bd89"],
  [13, 37, "#72653e"],
  [13, 38, "#3d2701"],
  [13, 39, "#c9a956"],
  [13, 40, "#f9ce65"],
  [13, 41, "#f4d16e"],
  [13, 42, "#ffe08c"],
  [13, 43, "#ffe396"],
  [13, 44, "#fee4a2"],
  [13, 45, "#ffe7ad"],
  [13, 46, "#ffefb4"],
  [13, 47, "#e2d4a7"],
  [13, 48, "#53392a"],
  [13, 49, "#4a2c1e"],
  [13, 50, "#502f1e"],
  [13, 51, "#5f3827"],
  [13, 52, "#978784"],
  [14, 5, "#fdce5d"],
  [14, 6, "#fbe9b8"],
  [14, 10, "#fcf2c7"],
  [14, 11, "#fdedb7"],
  [14, 12, "#fce8a6"],
  [14, 13, "#fae394"],
  [14, 14, "#fedb80"],
  [14, 15, "#ffd366"],
  [14, 16, "#fdce4b"],
  [14, 17, "#fdc836"],
  [14, 18, "#efb32b"],
  [14, 19, "#a6780d"],
  [14, 20, "#a47400"],
  [14, 21, "#b58e2a"],
  [14, 36, "#dfd6c5"],
  [14, 37, "#4f420c"],
  [14, 38, "#402800"],
  [14, 39, "#b3a17e"],
  [14, 40, "#fbf1c0"],
  [14, 41, "#eee3b4"],
  [14, 48, "#624a3c"],
  [14, 49, "#4c2d1f"],
  [14, 50, "#4e2d1c"],
  [14, 51, "#583221"],
  [14, 52, "#8a7b78"],
  [15, 5, "#fdca43"],
  [15, 6, "#fcebb5"],
  [15, 14, "#fff0bf"],
  [15, 15, "#ffeaa5"],
  [15, 16, "#fee38f"],
  [15, 17, "#fed97d"],
  [15, 18, "#ffd55f"],
  [15, 19, "#dfb43b"],
  [15, 20, "#a27508"],
  [15, 21, "#ba8000"],
  [15, 22, "#bca365"],
  [15, 35, "#dfd7c8"],
  [15, 36, "#7e6631"],
  [15, 37, "#4d3800"],
  [15, 38, "#715003"],
  [15, 39, "#bba889"],
  [15, 48, "#6e564c"],
  [15, 49, "#4f3021"],
  [15, 50, "#502e1d"],
  [15, 51, "#522d1b"],
  [15, 52, "#7e6f6a"],
  [16, 4, "#f3e6b8"],
  [16, 5, "#ebaa0c"],
  [16, 6, "#b59543"],
  [16, 7, "#8c826c"],
  [16, 8, "#96876e"],
  [16, 9, "#9c8c72"],
  [16, 10, "#a79473"],
  [16, 11, "#b29e79"],
  [16, 12, "#bdab82"],
  [16, 13, "#c8b88c"],
  [16, 14, "#d4c294"],
  [16, 15, "#dfcc9c"],
  [16, 16, "#e8d9a5"],
  [16, 17, "#f7e4a9"],
  [16, 18, "#fce5a2"],
  [16, 19, "#fce092"],
  [16, 20, "#ba8d23"],
  [16, 21, "#c38c01"],
  [16, 22, "#b5840e"],
  [16, 23, "#b49f74"],
  [16, 24, "#dad0ba"],
  [16, 29, "#b7b197"],
  [16, 33, "#d7ceb3"],
  [16, 34, "#a49265"],
  [16, 35, "#6b5310"],
  [16, 36, "#594200"],
  [16, 37, "#483305"],
  [16, 38, "#7f5b07"],
  [16, 39, "#aa9556"],
  [16, 40, "#b7b0a6"],
  [16, 41, "#afa380"],
  [16, 42, "#999381"],
  [16, 43, "#9e9786"],
  [16, 44, "#a49d8b"],
  [16, 45, "#a7a290"],
  [16, 46, "#a8a391"],
  [16, 47, "#aaa493"],
  [16, 48, "#63493d"],
  [16, 49, "#523425"],
  [16, 50, "#50301e"],
  [16, 51, "#4a2915"],
  [16, 52, "#796960"],
  [17, 4, "#e8dbb4"],
  [17, 5, "#ca8d02"],
  [17, 6, "#7b5704"],
  [17, 7, "#4b3913"],
  [17, 8, "#563e11"],
  [17, 9, "#493300"],
  [17, 10, "#553e00"],
  [17, 11, "#644700"],
  [17, 12, "#755100"],
  [17, 13, "#865d00"],
  [17, 14, "#916501"],
  [17, 15, "#9d6e07"],
  [17, 16, "#a87b10"],
  [17, 17, "#bb9125"],
  [17, 18, "#d3ab45"],
  [17, 19, "#e0b854"],
  [17, 20, "#d39b14"],
  [17, 21, "#e29e09"],
  [17, 22, "#dd9512"],
  [17, 23, "#c5971f"],
  [17, 24, "#ad800f"],
  [17, 25, "#be9225"],
  [17, 26, "#c69c3c"],
  [17, 27, "#c7a853"],
  [17, 28, "#bd9f49"],
  [17, 29, "#ad7f11"],
  [17, 30, "#ce9e41"],
  [17, 31, "#c6a150"],
  [17, 32, "#ad8836"],
  [17, 33, "#926f24"],
  [17, 34, "#7b5d1b"],
  [17, 35, "#6f5627"],
  [17, 36, "#4d3d12"],
  [17, 37, "#453300"],
  [17, 38, "#956d10"],
  [17, 39, "#94751c"],
  [17, 40, "#442e02"],
  [17, 41, "#5b400b"],
  [17, 42, "#472f00"],
  [17, 43, "#4a3200"],
  [17, 44, "#493200"],
  [17, 45, "#463000"],
  [17, 46, "#57420c"],
  [17, 47, "#4c3704"],
  [17, 48, "#4e351b"],
  [17, 49, "#56382c"],
  [17, 50, "#52311f"],
  [17, 51, "#44230f"],
  [17, 52, "#75655c"],
  [18, 4, "#e3d6b4"],
  [18, 5, "#b67e00"],
  [18, 6, "#755606"],
  [18, 7, "#53421d"],
  [18, 8, "#5e4919"],
  [18, 9, "#533f00"],
  [18, 10, "#604902"],
  [18, 11, "#715201"],
  [18, 12, "#835b03"],
  [18, 13, "#956406"],
  [18, 14, "#9f6e04"],
  [18, 15, "#aa7803"],
  [18, 16, "#b67f00"],
  [18, 17, "#bb8400"],
  [18, 18, "#bb8500"],
  [18, 19, "#ba8801"],
  [18, 20, "#c88f05"],
  [18, 21, "#dc9f07"],
  [18, 22, "#d99d0f"],
  [18, 23, "#ad8125"],
  [18, 24, "#d1980f"],
  [18, 25, "#d59406"],
  [18, 26, "#b58008"],
  [18, 27, "#936a0e"],
  [18, 28, "#a3832d"],
  [18, 29, "#af8520"],
  [18, 30, "#b38317"],
  [18, 31, "#9a7617"],
  [18, 32, "#8d6c1b"],
  [18, 33, "#816720"],
  [18, 34, "#776425"],
  [18, 35, "#785f2b"],
  [18, 36, "#4f3b16"],
  [18, 37, "#453304"],
  [18, 38, "#9d7815"],
  [18, 39, "#9b7a22"],
  [18, 40, "#503400"],
  [18, 41, "#614706"],
  [18, 42, "#553d02"],
  [18, 43, "#573f02"],
  [18, 44, "#553f04"],
  [18, 45, "#523e07"],
  [18, 46, "#6c5821"],
  [18, 47, "#5a450f"],
  [18, 48, "#513917"],
  [18, 49, "#56382c"],
  [18, 50, "#523120"],
  [18, 51, "#42210c"],
  [18, 52, "#73645b"],
  [19, 4, "#e9ddb4"],
  [19, 5, "#ce9301"],
  [19, 6, "#7e5a05"],
  [19, 7, "#58431c"],
  [19, 8, "#695219"],
  [19, 9, "#664b03"],
  [19, 10, "#735000"],
  [19, 11, "#7c5800"],
  [19, 12, "#845e01"],
  [19, 13, "#8a6203"],
  [19, 14, "#8e6704"],
  [19, 15, "#956e07"],
  [19, 16, "#9a7312"],
  [19, 17, "#a37e23"],
  [19, 18, "#b3933c"],
  [19, 19, "#d5c07b"],
  [19, 20, "#dbbf7a"],
  [19, 21, "#c38e0d"],
  [19, 22, "#d1930e"],
  [19, 23, "#dab956"],
  [19, 24, "#b38a3c"],
  [19, 25, "#b99544"],
  [19, 26, "#c5ab5b"],
  [19, 27, "#cdb36e"],
  [19, 28, "#c2a360"],
  [19, 29, "#aa811a"],
  [19, 30, "#cda645"],
  [19, 31, "#d5af4e"],
  [19, 32, "#cea535"],
  [19, 33, "#cc9b1d"],
  [19, 34, "#d09407"],
  [19, 35, "#d79a07"],
  [19, 36, "#ad7c11"],
  [19, 37, "#443207"],
  [19, 38, "#98710a"],
  [19, 39, "#8b6b23"],
  [19, 40, "#513f1f"],
  [19, 41, "#65511c"],
  [19, 42, "#3f2d00"],
  [19, 43, "#433100"],
  [19, 44, "#423000"],
  [19, 45, "#422f00"],
  [19, 46, "#5d4a18"],
  [19, 47, "#4c3908"],
  [19, 48, "#4b3617"],
  [19, 49, "#553827"],
  [19, 50, "#532f20"],
  [19, 51, "#46220f"],
  [19, 52, "#776a60"],
  [20, 4, "#f5e8b8"],
  [20, 5, "#edaa06"],
  [20, 6, "#cdab56"],
  [20, 7, "#bdb29b"],
  [20, 8, "#c7b995"],
  [20, 9, "#c8b786"],
  [20, 10, "#cbb981"],
  [20, 11, "#d1bc7f"],
  [20, 12, "#d6c082"],
  [20, 13, "#dac48e"],
  [20, 14, "#deca91"],
  [20, 15, "#e5d195"],
  [20, 16, "#edda99"],
  [20, 17, "#f5e3a2"],
  [20, 18, "#fce9a7"],
  [20, 19, "#ffeea6"],
  [20, 20, "#e9d086"],
  [20, 21, "#a87a05"],
  [20, 22, "#b27f0d"],
  [20, 23, "#d5c598"],
  [20, 29, "#dad8c4"],
  [20, 34, "#dfd1b2"],
  [20, 35, "#be9c59"],
  [20, 36, "#986e06"],
  [20, 37, "#674808"],
  [20, 38, "#8b5d06"],
  [20, 39, "#a18a61"],
  [20, 41, "#c4b99f"],
  [20, 42, "#aca698"],
  [20, 43, "#a9a395"],
  [20, 44, "#a7a192"],
  [20, 45, "#a5a090"],
  [20, 46, "#aea999"],
  [20, 47, "#a39d8c"],
  [20, 48, "#5b4631"],
  [20, 49, "#513326"],
  [20, 50, "#532f1e"],
  [20, 51, "#4b2713"],
  [20, 52, "#7c6f65"],
  [21, 4, "#fbf0c7"],
  [21, 5, "#fbc432"],
  [21, 6, "#fcdf87"],
  [21, 8, "#fff4c3"],
  [21, 9, "#ffefb6"],
  [21, 10, "#ffeaaf"],
  [21, 11, "#ffe9a7"],
  [21, 12, "#ffe79e"],
  [21, 13, "#ffe492"],
  [21, 14, "#ffe28c"],
  [21, 15, "#fde085"],
  [21, 16, "#fedb7c"],
  [21, 17, "#fed96e"],
  [21, 18, "#fed663"],
  [21, 19, "#ffd75d"],
  [21, 20, "#af8d33"],
  [21, 21, "#835b00"],
  [21, 22, "#b79f60"],
  [21, 36, "#c8b27e"],
  [21, 37, "#8e6404"],
  [21, 38, "#4e3405"],
  [21, 39, "#958878"],
  [21, 48, "#644e42"],
  [21, 49, "#4f3026"],
  [21, 50, "#502d1c"],
  [21, 51, "#4c2915"],
  [21, 52, "#86796e"],
  [22, 5, "#fcd666"],
  [22, 6, "#fdd978"],
  [22, 7, "#ffdd8e"],
  [22, 8, "#fedd84"],
  [22, 9, "#fdd771"],
  [22, 10, "#fed265"],
  [22, 11, "#fcd25b"],
  [22, 12, "#fbcf50"],
  [22, 13, "#fecb46"],
  [22, 14, "#fec93e"],
  [22, 15, "#fec636"],
  [22, 16, "#f9c630"],
  [22, 17, "#fac326"],
  [22, 18, "#ffbe2a"],
  [22, 19, "#c39323"],
  [22, 20, "#6a4700"],
  [22, 21, "#8f702c"],
  [22, 37, "#866821"],
  [22, 38, "#291903"],
  [22, 39, "#a39174"],
  [22, 40, "#fff0b9"],
  [22, 41, "#ede0a8"],
  [22, 42, "#fef3c5"],
  [22, 43, "#fdf2c3"],
  [22, 44, "#fef1c0"],
  [22, 45, "#fcf0c5"],
  [22, 47, "#e7deb7"],
  [22, 48, "#553d2e"],
  [22, 49, "#4e2f22"],
  [22, 50, "#4d2c1b"],
  [22, 51, "#4e2e16"],
  [22, 52, "#90857c"],
  [23, 5, "#f9ce52"],
  [23, 6, "#fec940"],
  [23, 7, "#fdc53d"],
  [23, 8, "#fbc438"],
  [23, 9, "#fabf2a"],
  [23, 10, "#fbba23"],
  [23, 11, "#f8b81f"],
  [23, 12, "#f4b41b"],
  [23, 13, "#f3b21b"],
  [23, 14, "#f0af14"],
  [23, 15, "#eaab0d"],
  [23, 16, "#e0a60d"],
  [23, 17, "#d49311"],
  [23, 18, "#a0710b"],
  [23, 19, "#795605"],
  [23, 20, "#9c7217"],
  [23, 21, "#dacba1"],
  [23, 37, "#98854f"],
  [23, 38, "#3e2900"],
  [23, 39, "#bfa356"],
  [23, 40, "#f8d265"],
  [23, 41, "#f4cd5d"],
  [23, 42, "#ffd86e"],
  [23, 43, "#ffd76e"],
  [23, 44, "#ffd76c"],
  [23, 45, "#fed76c"],
  [23, 46, "#ffde73"],
  [23, 47, "#ceb162"],
  [23, 48, "#4a2f23"],
  [23, 49, "#4b2d1e"],
  [23, 50, "#4f2e1d"],
  [23, 51, "#533522"],
  [23, 52, "#9c948f"],
  [24, 5, "#f2bd2d"],
  [24, 6, "#eeac0d"],
  [24, 7, "#e5a90c"],
  [24, 8, "#e2a50c"],
  [24, 9, "#dca007"],
  [24, 10, "#d29908"],
  [24, 11, "#ce910b"],
  [24, 12, "#c68a0c"],
  [24, 13, "#bb8709"],
  [24, 14, "#b07e0b"],
  [24, 15, "#a4730a"],
  [24, 16, "#9a6c03"],
  [24, 17, "#956c01"],
  [24, 18, "#af8825"],
  [24, 19, "#cdb363"],
  [24, 20, "#d4c89a"],
  [24, 37, "#bfb397"],
  [24, 38, "#634200"],
  [24, 39, "#9a7213"],
  [24, 40, "#ad7916"],
  [24, 41, "#d6a316"],
  [24, 42, "#dfa811"],
  [24, 43, "#dda511"],
  [24, 44, "#dea412"],
  [24, 45, "#dca412"],
  [24, 46, "#e2a814"],
  [24, 47, "#9a7217"],
  [24, 48, "#462922"],
  [24, 49, "#482a1c"],
  [24, 50, "#533221"],
  [24, 51, "#593c2f"],
  [24, 52, "#a9a4a3"],
  [25, 5, "#d2a129"],
  [25, 6, "#ad7e02"],
  [25, 7, "#9f7406"],
  [25, 8, "#9c6e06"],
  [25, 9, "#966b06"],
  [25, 10, "#916905"],
  [25, 11, "#906801"],
  [25, 12, "#946800"],
  [25, 13, "#a46d03"],
  [25, 14, "#ac7b10"],
  [25, 15, "#b68b21"],
  [25, 16, "#c5a251"],
  [25, 17, "#dec89d"],
  [25, 18, "#e5dcba"],
  [25, 19, "#d7d1a6"],
  [25, 38, "#9e8451"],
  [25, 39, "#9f7112"],
  [25, 40, "#996600"],
  [25, 41, "#926800"],
  [25, 42, "#936700"],
  [25, 43, "#916500"],
  [25, 44, "#926500"],
  [25, 45, "#926400"],
  [25, 46, "#936a07"],
  [25, 47, "#583c14"],
  [25, 48, "#472820"],
  [25, 49, "#46251a"],
  [25, 50, "#573529"],
  [25, 51, "#614739"],
  [25, 52, "#b8b9b7"],
  [26, 5, "#b89961"],
  [26, 6, "#b08312"],
  [26, 7, "#b88b1f"],
  [26, 8, "#b98e20"],
  [26, 9, "#be9429"],
  [26, 10, "#c2993b"],
  [26, 11, "#c7a453"],
  [26, 12, "#d1b470"],
  [26, 13, "#dac492"],
  [26, 14, "#e4dab8"],
  [26, 18, "#dacda5"],
  [26, 39, "#dfd3bd"],
  [26, 40, "#bfa56d"],
  [26, 41, "#bca162"],
  [26, 42, "#bb9e61"],
  [26, 43, "#ba9d60"],
  [26, 44, "#bb9e60"],
  [26, 45, "#baa059"],
  [26, 46, "#755a1c"],
  [26, 47, "#452613"],
  [26, 48, "#46271d"],
  [26, 49, "#47271c"],
  [26, 50, "#533328"],
  [26, 51, "#6a574d"],
  [26, 52, "#c8cbc9"],
  [27, 4, "#e8d59a"],
  [27, 5, "#e3c163"],
  [27, 6, "#dcc58a"],
  [27, 16, "#e6dbc8"],
  [27, 17, "#dbd3ab"],
  [27, 46, "#9a8d8d"],
  [27, 47, "#3c170d"],
  [27, 48, "#442519"],
  [27, 49, "#482b1f"],
  [27, 50, "#4d3024"],
  [27, 51, "#7c736f"],
  [28, 3, "#ebcc6e"],
  [28, 4, "#f7ce5b"],
  [28, 5, "#ebd176"],
  [28, 15, "#e0d3a9"],
  [28, 16, "#e1dcb7"],
  [28, 47, "#807a75"],
  [28, 48, "#45271f"],
  [28, 49, "#45291f"],
  [28, 50, "#553f33"],
  [28, 51, "#9d9997"],
  [29, 3, "#eece79"],
  [29, 4, "#e8d79f"],
  [29, 13, "#ede4b6"],
  [29, 14, "#e3ca8c"],
  [29, 48, "#a29795"],
  [29, 49, "#7c7572"],
  [29, 50, "#86847f"],
  [29, 51, "#b2b2b1"],
  [30, 2, "#e0da9a"],
  [30, 3, "#e7d57b"],
  [30, 4, "#ecde9e"],
  [30, 11, "#e5d6ae"],
  [30, 12, "#e9d18b"],
  [30, 13, "#e9d89f"],
  [30, 48, "#c1c3c4"],
  [30, 49, "#9da0a1"],
  [30, 50, "#9ea1a3"],
  [30, 51, "#c6c7c7"],
  [31, 4, "#f0e2ae"],
  [31, 5, "#e8dda6"],
  [31, 6, "#ede0a9"],
  [31, 7, "#eedead"],
  [31, 8, "#ecda9b"],
  [31, 9, "#e4d48f"],
  [31, 10, "#e2d6a4"],
  [31, 49, "#b4b3b4"],
  [31, 50, "#b7b5b6"]
];

export default cup_bitmap_lst;