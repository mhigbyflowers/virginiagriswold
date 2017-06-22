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
            desc: vm.equalPartsMarkup

          },
          {
            name: 'osage',
            year: '2015',
            desc: '
            Completed while in residence at The Hambidge Center for the Creative Arts and Sciences, Rabun Gap, GA, July / August 2015 ',
            materials:'cast resin, porcelain, hydrocal, wood '},
            {
              name: 'ripe/raw',
              year: 'ongoing',
              desc: 'A digital collage using images of raw materials, sculpted forms, and objects from the studio.',
              materials: 'digital images'
            },
            {
              name: 'mirror object',
              year: '2014',
              desc: 'A site specific installation in Iceland',
              materials: 'digital video'
            },
            {
              name: 'near earth bjects',
              year: '2014',
              desc: 'Trahern Gallery, Austin Peay State University, Fall 2014',

            },
            {
              name: 'levarche',
              year: '2011',
              desc: '',
              materials: 'glass, aluminum, rubber, pigments'
            },
            {
              name: 'table (two)',
              year: '2011',
              desc: '',
              materials: 'low-iron (clear) float glass, bass wood, cut porcelain, rubber'
            },
            {
              name: 'table (one)',
              year: '2010',
              desc: '',
              materials: 'float glass, bass wood, cut porcelain, rubber'
            },
            {
              name: 'outside',
              year: '2011',
              desc: '(a thaw, an overflow)  Alfred, NY, (site-influenced)',
              materials: 'plaster, foam, milk glass lid'
            },
            {
              name: 'float pile',
              year: '2011',
              desc: '',
              materials: ' expandable marine foam, pigments, rubber, gold dust, handmade dolly, casters, t-pins'
            },
            {
              name: 'primary ornament',
              year: '2010',
              desc: '',
              materials: 'slip-cast ceramic, porcelain shards, glass, oak, plexi-glass'
            },
            {
              name: 'alienum',
              year: '2010',
              desc: '',
              materials: 'slip-cast porcelain, rubber, plaster, steel'
            },
            {
              name: 'through an eye',
              year: '2010',
              desc: '',
              materials: 'compote glass, rubber, gold pigments'
            },
            {
              name: 'objects',
              year: '2006',
              desc: '',
              materials: ''
            }

          ]
        }
    })();
