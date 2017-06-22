(function() {
    'use strict';

    angular
      .module('va')
      .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr) {
      var vm = this;
      vm.equalPartsMarkup = < div id = 'text' > < p > < em > Equal Parts < /em> at The Packing Plant, Nashville, TN, October 2015</p > < p > "For<em> Equal Parts </em>Virginia Griswold continues her exploration of multiples, pulling ideas from two different bodies of work to create new groupings. This work culminates in a sculptural tableau vivant composed of specimens, fragments, and forms from her studio. Bringing together sculpture, casting, and photography Virginia finds connections between her personal practice and the metaphorical act of ‘match-making’, constructing relationships between process and product that disrupt a dichotomous understanding of form. At once fleshy and plastic, floral and mineral, Griswold’s objects distort polarized perceptions like natural/unnatural and finished/unfinished, exposing the falsity of simple binaries." < /p><p>- Zack Rafuls and Ann Catherine Carter, curators and co-directors - <a href="http:/ / thepackingplant.net / ">The Packing Plant</a></p><p><a href="
      http: //badatsports.com/2015/from-the-road-transformer-2/">READ A REVIEW OF <em>Equal Parts</em> BY ERIC ASBOE FOR <em>BAD AT SPORTS</em></a><br /></p></div>

        vm.projects = [{
            name: 'equal parts',
            year: '2015',
            desc: vm.equalPartsMarkup,
            img:['ep-1.jpg' , 'ep-10.jpg' , 'ep-11.jpg' , 'p-12.jpg' , 'ep-2.jpg' , 'ep-3.jpg' , 'ep-4.jpg' , 'ep-5.jpg' , 'ep-6.jpg' , 'ep-7.jpg' , 'ep-8.jpg' , 'ep-9.jpg']

          },
          {
            name: 'osage',
            year: '2015',
            desc: '
            Completed while in residence at The Hambidge Center for the Creative Arts and Sciences, Rabun Gap, GA, July / August 2015 ',
            materials:'cast resin, porcelain, hydrocal, wood',
            img:['os-1.jpg' , 'os-2.jpg' , 'os-3.jpg' , 'os-4.jpg' , 'os-5.jpg' , 'os-6.jpg' , 'os-7.jpg']
            },
            {
              name: 'ripe/raw',
              year: 'ongoing',
              desc: 'A digital collage using images of raw materials, sculpted forms, and objects from the studio.',
              materials: 'digital images',
              img:['rr-1.png', 'rr-2.png', 'rr-3.jpg', 'rr-4.jpg', 'rr-5.jpg', 'rr-6.jpg', 'rr-7.jpg', 'rr-8.png']
            },
            {
              name: 'mirror object',
              year: '2014',
              desc: 'A site specific installation in Iceland',
              materials: 'digital video',
              img:['VIDEO']
            },
            {
              name: 'near earth bjects',
              year: '2014',
              desc: 'Trahern Gallery, Austin Peay State University, Fall 2014',
              img:['neo-1.jpg' , 'neo-10.jpg' ,'neo-11.png','neo-2.jpg' , 'neo-3.jpg' , 'neo-4.jpg' , 'neo-5.jpg' , 'neo-6.jpg' , 'neo-7.jpg' , 'neo-8.jpg' , 'neo-9.jpg']

            },
            {
              name: 'levarche',
              year: '2011',
              desc: '',
              materials: 'glass, aluminum, rubber, pigments',
              img:['lev-1.jpg' ,'lev-2.jpg' ,'lev-3.jpg' ,'lev-4.jpg' ,'lev-5.jpg']
            },
            {
              name: 'table (two)',
              year: '2011',
              desc: '',
              materials: 'low-iron (clear) float glass, bass wood, cut porcelain, rubber',
              img:['t2-1.jpg' , 't2-2.jpg' , 't2-3.jpg' , 't2-4.jpg' , 't2-5.jpg']
            },
            {
              name: 'table (one)',
              year: '2010',
              desc: '',
              materials: 'float glass, bass wood, cut porcelain, rubber',
              img:['t1-1.jpg' , 't1-2.jpg' ,'t1-3.jpg']
            },
            {
              name: 'outside',
              year: '2011',
              desc: '(a thaw, an overflow)  Alfred, NY, (site-influenced)',
              materials: 'plaster, foam, milk glass lid',
              img:[]
            },
            {
              name: 'float pile',
              year: '2011',
              desc: '',
              materials: ' expandable marine foam, pigments, rubber, gold dust, handmade dolly, casters, t-pins',
              img:['o-1.jpg', 'o-2.jpg', 'o-3.jpg', 'o-4.jpg']
            },
            {
              name: 'primary ornament',
              year: '2010',
              desc: '',
              materials: 'slip-cast ceramic, porcelain shards, glass, oak, plexi-glass',
              img:[]
            },
            {
              name: 'alienum',
              year: '2010',
              desc: '',
              materials: 'slip-cast porcelain, rubber, plaster, steel',
              img:[]
            },
            {
              name: 'through an eye',
              year: '2010',
              desc: '',
              materials: 'compote glass, rubber, gold pigments',
              img:['tae-1.jpg' ,'tae-2.jpg']
            },
            {
              name: 'objects',
              year: '2006',
              desc: '',
              materials: '',
              img:['obj-1.jpg' , 'obj-2.jpg' , 'obj-3.jpg' ,'obj-4.jpg' , 'obj-5.jpg' ,'obj-6.jpg' , 'obj-7.jpg' ,'obj-8.jpg' , 'obj-9.jpg',
'obj-10.jpg','obj-11.jpg', 'obj-12.jpg','obj-13.jpg' ]
            }

          ]
        }
    })();
