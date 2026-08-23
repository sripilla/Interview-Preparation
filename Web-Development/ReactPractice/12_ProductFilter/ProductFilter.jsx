/*
===========================================================
REACT LESSON: MULTI-CATEGORY PRODUCT FILTER
===========================================================

This program practices:

1. useState
2. Controlled checkboxes
3. onChange
4. Arrays
5. Arrays of objects
6. map()
7. filter()
8. includes()
9. Conditional rendering
10. Dynamic rendering
11. Derived data
12. Spread operator
13. Checkbox checked state
14. Event handling


===========================================================
1. THE PRODUCT DATA
===========================================================

Products are stored as an array of objects.

Example:

{
    id: 1,
    name: "Wireless headphones",
    category: "Electronics",
    price: 59
}


Each product has:

id
name
category
price


===========================================================
2. CATEGORIES ARRAY
===========================================================

Categories are stored separately:

const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home"
];


The checkboxes must be generated dynamically
from this array.

We should NOT write four separate checkbox elements.


===========================================================
3. SELECTED CATEGORIES STATE
===========================================================

We need to remember which categories the user selected.

Example:

const [selectedCategories, setSelectedCategories]
    = useState([]);


Initially:

[]


This means:

No categories selected.

And according to the requirement:

NO CATEGORY SELECTED
        ↓
SHOW ALL PRODUCTS


===========================================================
4. CHECKBOXES ARE CONTROLLED INPUTS
===========================================================

A checkbox can be controlled using:

checked={selectedCategories.includes(category)}


If the category exists in selectedCategories:

true

The checkbox is checked.


If it doesn't exist:

false

The checkbox is unchecked.


===========================================================
5. map() FOR CHECKBOXES
===========================================================

Instead of:

<input />
<input />
<input />
<input />


we use:

categories.map((category) => (
    <input ... />
))


This is dynamic rendering.


===========================================================
6. CHECKING A CATEGORY
===========================================================

Suppose:

selectedCategories = []


User checks:

Electronics


We create:

["Electronics"]


Then user checks Books:

["Electronics", "Books"]


===========================================================
7. ADDING A CATEGORY
===========================================================

We use the spread operator:

setSelectedCategories([
    ...selectedCategories,
    category
]);


The old categories are copied and
the new category is added.


===========================================================
8. REMOVING A CATEGORY
===========================================================

When a checkbox is unchecked,
we remove that category.

Use:

filter()


Example:

selectedCategories.filter(
    (item) => item !== category
)


If:

["Electronics", "Books"]


and we remove:

"Electronics"


we get:

["Books"]


===========================================================
9. handleCategoryChange()
===========================================================

The handler receives:

category
checked


If checked:

ADD category.


If unchecked:

REMOVE category.


===========================================================
10. FILTERING PRODUCTS
===========================================================

The important requirement is:

If no category is selected:

SHOW EVERYTHING.


Therefore:

if selectedCategories.length === 0

filteredProducts = products


Otherwise:

show only products whose category
is inside selectedCategories.


===========================================================
11. includes()
===========================================================

includes() checks whether an array contains
a particular value.

Example:

selectedCategories = [
    "Electronics",
    "Books"
];


Then:

selectedCategories.includes("Books")

returns:

true


But:

selectedCategories.includes("Home")

returns:

false.


===========================================================
12. filter() PRODUCTS
===========================================================

We can filter products:

products.filter(
    (product) =>
        selectedCategories.includes(
            product.category
        )
)


This keeps only products whose category
is selected.


===========================================================
13. DERIVED DATA
===========================================================

filteredProducts does NOT need its own state.

Why?

Because it can be calculated from:

products
+
selectedCategories


This is called:

DERIVED DATA.


===========================================================
14. EMPTY FILTER RESULT
===========================================================

If categories are selected but no products match:

show:

"No products match the selected filters"


Example:

Selected:

Home


If there are no Home products:

No products match the selected filters


===========================================================
15. IMPORTANT DIFFERENCE
===========================================================

There are two different empty situations.

CASE 1:

No categories selected.

selectedCategories = []


Result:

SHOW ALL PRODUCTS.


CASE 2:

Categories selected.

selectedCategories.length > 0

but no products match.


Result:

"No products match the selected filters"


===========================================================
16. RENDERING PRODUCTS
===========================================================

Use map():

filteredProducts.map((product) => (
    <div>
        {product.name}
        {product.price}
    </div>
))


Each product should have:

key={product.id}


===========================================================
17. PRICE DISPLAY
===========================================================

We can display:

$59.00


using:

product.price.toFixed(2)


Example:

59.toFixed(2)

becomes:

"59.00"


===========================================================
18. IMPORTANT DATA FLOW
===========================================================

Categories
     ↓
Checkboxes
     ↓
selectedCategories
     ↓
filter products
     ↓
filteredProducts
     ↓
render product list


===========================================================
19. REQUIREMENTS
===========================================================

1. Dynamically create checkboxes.
2. Checking adds category.
3. Unchecking removes category.
4. No selected categories = show everything.
5. Selected categories = filter products.
6. Show name and price.
7. No matches = show appropriate message.


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function ProductFilter() {

  // -------------------------------------------------------
  // CATEGORY DATA
  // -------------------------------------------------------

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home",
  ];


  // -------------------------------------------------------
  // PRODUCT DATA
  // -------------------------------------------------------

  const products = [
    {
      id: 1,
      name: "Wireless headphones",
      category: "Electronics",
      price: 59,
    },

    {
      id: 2,
      name: "Mechanical keyboard",
      category: "Electronics",
      price: 89,
    },

    {
      id: 3,
      name: "Cotton T-shirt",
      category: "Clothing",
      price: 25,
    },

    {
      id: 4,
      name: "The Design of Everyday Things",
      category: "Books",
      price: 18,
    },

    {
      id: 5,
      name: "Running shoes",
      category: "Clothing",
      price: 75,
    },

    {
      id: 6,
      name: "Coffee table",
      category: "Home",
      price: 120,
    },
  ];


  // -------------------------------------------------------
  // SELECTED CATEGORIES STATE
  // -------------------------------------------------------

  const [selectedCategories, setSelectedCategories] =
    useState([]);


  // -------------------------------------------------------
  // HANDLE CATEGORY CHECKBOX
  // -------------------------------------------------------

  function handleCategoryChange(
    category,
    checked
  ) {

    if (checked) {

      // Add category
      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);

    } else {

      // Remove category
      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );
    }
  }


  // -------------------------------------------------------
  // FILTER PRODUCTS
  // -------------------------------------------------------

  let filteredProducts = products;


  /*
    If at least one category is selected,
    filter the products.

    If none is selected,
    keep all products.
  */

  if (selectedCategories.length > 0) {

    filteredProducts =
      products.filter((product) =>
        selectedCategories.includes(
          product.category
        )
      );
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "30px auto",
        padding: 26,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <h2
        style={{
          marginTop: 0,
          fontSize: 20,
        }}
      >
        Filter by category
      </h2>


      {/* =================================================
          CATEGORY CHECKBOXES
      ================================================= */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          paddingBottom: 18,
          borderBottom: "1px solid #ddd",
        }}
      >

        {categories.map((category) => (

          <label
            key={category}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >

            <input
              type="checkbox"

              /*
                Checkbox is checked when
                category exists in selectedCategories.
              */

              checked={selectedCategories.includes(
                category
              )}

              onChange={(e) =>
                handleCategoryChange(
                  category,
                  e.target.checked
                )
              }
            />

            {category}

          </label>

        ))}

      </div>


      {/* =================================================
          PRODUCT LIST
      ================================================= */}

      <div
        style={{
          marginTop: 10,
        }}
      >

        {filteredProducts.length === 0 ? (

          /* =================================================
             NO MATCHES
          ================================================= */

          <p
            style={{
              color: "#777",
              textAlign: "center",
              padding: 20,
            }}
          >
            No products match the selected filters.
          </p>

        ) : (

          /* =================================================
             PRODUCTS
          ================================================= */

          filteredProducts.map((product) => (

            <div
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom:
                  "1px solid #eee",
              }}
            >

              {/* PRODUCT NAME */}

              <span
                style={{
                  fontWeight: "500",
                }}
              >
                {product.name}
              </span>


              {/* PRODUCT PRICE */}

              <span
                style={{
                  color: "#555",
                }}
              >
                ${product.price.toFixed(2)}
              </span>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default ProductFilter;