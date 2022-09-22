import React from 'react';
import './blog.css';
import Article from '../../components/artical/Artical';
import {MethiThepla, sandwich, pizza, burger, noodels} from './import';

const Blog = () => {
  return (
    <div className="swadist__blog section__padding" id="blog">
      <div className='swadist__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening,<br/> We are blogging about it. 
        </h1>
      </div>
      <div className='swadist__blog-container'>
        <div className='swadist__blog-container_groupA'>
          <Article imgUrl={MethiThepla} date="sep 18, 2022" title="Methi na gota Recipe" text="Ingredients : 
½ cup
Water,
1 tablespoon
Oil,
1 tablespoon
Sugar,
1 
Chilli (finely chopped),
½ teaspoon
Ginger Paste,
½ teaspoon
Coriander Seeds (crushed),
¼ teaspoon
Carom Seeds (ajwain),
½ teaspoon
Pepper (crushed),
¼ teaspoon
Turmeric,
½ teaspoon
Red Chilli Powder
add pinch
Hing Asafoetida,
1 tablespoon
Lemon Juice,
¾ teaspoon
Salt,
¼ teaspoon
Baking Soda,
¾ cup
Methi (fenugreek leaves/finely chopped),
3 tablespoons
Coriander (finely chopped),
2 tablespoons
Semolina (rava/suji, fine),
1 cup
Flour (besan/gram)
add 
Oil (for frying)"/>
        </div>
        <div className="swadist__blog-container_groupB">
            <Article imgUrl={pizza} date="sep 18, 2022" title="Grilled Veggie Pizza" text="Ingredients
8 
Small Fresh Mushrooms (halved),
1 
Small Zucchini (cut into 1/4-inch slices),
1 
Small Sweet Yellow Pepper (sliced),
1 
Small Sweet Red Pepper (sliced),
1 
Small Onion (sliced),
1 tablespoon
White Wine Vinegar,
1 tablespoon
Water,
4 teaspoons
Olive Oil (divided),
2 teaspoons
Fresh Basil (minced, or 1/2 teaspoon dried basil),
¼ teaspoon
Salt,
¼ teaspoon
Pepper,
1 
Prebaked 12-Inch Thin Whole Wheat Pizza Crust,
8 ounces
Pizza Sauce,
2 
Small Tomatoes (chopped),
2 cups
Part-Skim Mozzarella Cheese (shredded)"/>
            <Article imgUrl={burger} date="sep 18, 2022" title="Barbecued Burgers" text="Ingredients
1 cup
Ketchup,
½ cup
Brown Sugar (packed),
⅓ cup
Sugar,
¼ cup
Honey,
¼ cup
Molasses,
2 teaspoons
Prepared Mustard,
1 ½ teaspoons
Worcestershire Sauce,
0.38 teaspoon
Salt,
¼ teaspoon
Liquid Smoke,
0.37 teaspoon
Pepper,
1 
Large Egg (lightly beaten),
⅓ cup
Quick-Cooking Oats,
¼ teaspoon
Onion Salt,
¼ teaspoon
Garlic Salt,
1 ½ pounds
Ground Beef,
6 
Hamburger Buns (split),
add 
Toppings Of Your Choice"/>
            <Article imgUrl={noodels} date="sep 18, 2022" title="Spicy Soba Noodles" text="Ingredients
8 ounces
Soba Noodles (cooked per package directions. Please note that not all soba noodles are GF),
½ cup
Low Sodium GF Tamari Sauce,
  ¼ cup
  GF Rice Vinegar,
1 tablespoon
GF Miso Paste (please note, not all miso paste is gluten-free),
1 tablespoon
Peanut Butter (or cashew),
1 tablespoon
Pure Maple Syrup,
1 
Garlic Clove (minced),
¼ teaspoon
GF Ground Cinnamon,
2 tablespoons
Sesame Oil,
1 pound
Pork (or lean ground chicken, for a vegan option, see below),
1 
Large Red Bell Pepper (sliced),
1 tablespoon
Fresh Ginger (grated),
1 
Hot Chili Pepper (seeded and finely chopped, omit if making for younger children),
¼ cup
Fresh Basil (chopped, I prefer Thai basil),
4 
Green Onions (sliced plus some for garnish),
2 tablespoons
Sesame Seeds (black or white),
add 
Vegan Option Substitute Chicken (for; 12 oz. GF vegan burgers, broken down into small pieces or 350 g, 12 oz. extra firm GF tofu, cut into cubes)" />
            <Article imgUrl={sandwich} date="sep 18, 2022" title="Sandwich Recipe" text="Ingredients
4 ½ cups
All-Purpose Flour,
1 tablespoon
Baking Powder,
2 teaspoons
Sugar,
1 ¾ teaspoons
Salt,
1 ¼ cups
Heavy Cream,
2 teaspoons
Granulated Sugar,
1 cup
Unsalted Butter (cold and cut into cubes),
6 tablespoons
Ice Water,
3 pounds
Apples (6-7 large Granny Smith or Honey Crisp),
3 tablespoons
Cornstarch,
¼ cup
Unsalted Butter,
½ cup
Granulated Sugar,
½ cup
Brown Sugar (packed),
2 teaspoons
Fresh Lemon Juice,
1 teaspoon
Cinnamon,
210 grams
Spelt Flour,
70 grams
Almond Flour,
2 tablespoons
Coconut Flour,
1 ½ cups
Pumpkin Puree,
130 grams
Coconut Sugar,
1 teaspoon
Baking Powder,
1 teaspoon
Baking Soda,
75 milliliters
Unsweetened Almond Milk,
75 grams
Melted Coconut Oil,
1 tablespoon
Pumpkin Spice,
8 
Pecans,
21 grams
Raw Pumpkin Seeds"/>
        </div>
      </div>
    </div>
  )
}

export default Blog