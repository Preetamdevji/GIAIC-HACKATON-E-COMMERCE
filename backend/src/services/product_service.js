const Category = require("../model/category_model.js");
const Product = require("../model/product_model.js");


async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    await thirdLevel.save();
  }

  let product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountPresent: reqData.discountPresent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.sizes,
    quantity: reqData.quantity,
    category: reqData.thirdLevelCategory._id,
  });
  // console.log(product);
  return await product.save();
}

async function deleteProduct(productId) {
  let product = await Product.findById(productId);

  await Product.findByIdAndDelete(productId);

  return "Product Deleted Successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(productId) {
  let product = await Product.findById(productId).populate("category").exec();
        // console.log("product", product);
  if (!product) {
    throw new Error("Product not found with id " + id);
  }
  return product;
}


async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  pageSize = pageSize || 10;
  pageNumber = +pageNumber

  let query = Product.find().populate("category");

  // console.log("this is query",query)

  if (category) {
    let existCategory = await Category.find({ name: category });
    // console.log("this is category", existCategory)
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
      // console.log("this is query", query)
    } else {
      return { Content: [], currentPage: 1, totalPages: 0 };
    }
  }
  // red,blue,green .spilt()
  // [ red, blue, green ].trim()
  // [red,blue,green]
  if (color) {
    const colorSet = new Set(
      color.split(",").map(color=>color.trim().toLowerCase()));

    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = query.where(color).regex(colorRegex);
  }
  if (sizes) {
    const sizesSet = new Set(sizes);
    query.query.where("sizes.name").in([...sizesSet]);
  }
  if (minPrice && maxPrice) {
    query=query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }
  // the +unary operater can convert the string type to type number
  if (+minDiscount) {
    query = query.where("discountPresent").gt(minDiscount);
  }
  console.log("minDiscount",minDiscount);
  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gte(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").lte(1);
    }
  }
  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }

  const totalProducts = await Product.countDocuments(query);
  console.log("Total Product ", totalProducts);
  const skip = Math.max((pageNumber - 1) * pageSize, 0);
  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();

  const totalPages = Math.ceil(totalProducts / pageSize);
  // console.log("totalPages" ,totalProducts / pageSize, totalPages);
  return { Content: products, currentPage: pageNumber, totalPages }
  // console.log({ Content: products, currentPage: pageNumber, totalPages });
}


async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};
