app.controller("foodController",function($scope,$stateParams,$location){
        
   
$scope.foodies=function(){
  $location.path("foodie");
}
$scope.food=[
  {'item':'PIZA',
  'head':'PIZZAAA...!!!',
    'description':'Piza is a tasty foreign dish.Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments.',
    'image':'images/piza.jpg'
  },
  {'item':'PUDDING',
  'head':'Pudding World...',
    'description':'pudding is a sweety foreign dish.Pudding is a kind of food that can be either a dessert or a savory dish. The word pudding is believed to come from the French boudin, originally from the Latin botellus, meaning "small sausage"',
    'image':'images/pudding.jpg'
  },
  {'item':'RICE',
  'head':'RICE varieties',
    'description':'rice is healthy.Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain',
    'image':'images/foodie1.jpg'
  },
  {'item':'FRUIT',
  'head':'Fruity World...',
    'description':'fruit is a sweety foreign dish.In botany, a fruit is the seed-bearing structure in flowering plants formed from the ovary after flowering. Fruits are the means by which angiosperms disseminate seeds',
    'image':'images/fruit1.jpg'
  },
  {'item':'MOMO',
  'head':'MoMo WoRLD...',
    'description':'momo is a sweety foreign dish.Momo is a type of South Asian dumpling; native to Tibet, Nepal, Sikkim state and Darjeeling district of India and Bhutan. It is similar to Chinese baozi and jiaozi, Mongolian buuz, Japanese gyoza and Korean mandu.',
    'image':'images/momo.jpg'
  }, 
   {'item':'JUICE',
  'head':'Juicyy WoRLD...',
    'description':'Juice is a sweety healthy drink.Juice is a liquid that is naturally contained in fruit and vegetables. It can also refer to liquids that are flavored with these or other biological food sources such as meat and seafood',
    'image':'images/juice.jpg'
  },  
  {'item':'SNACKS',
  'head':'Snacks WoRLD...',
    'description':'Snacks are of different types.mumbai cheese chilli toast sandwich recipe with step by step pics. tasty toast sandwiches made with cheese, green chilies, green chutney and spices+herbs. mumbai street style food is a hit at home.',
    'image':'images/snacks1.jpg'
  },  {'item':'JAMUN',
  'head':'JAMUN WoRLD...',
    'description':'JAmun are of different types.Gulab jamun, or gulaab jamun, is a milk-solids-based sweet mithai, popular in countries in South Asia, in particular in India, Sri Lanka, Nepal, Pakistan and Bangladesh',
    'image':'images/jamun1.jpg'
  },  {'item':'ICE CREAM',
  'head':'ICE CREAMyy WoRLD...',
    'description':'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavours.',
    'image':'images/ice1.jpg'
  }
];
       

      });