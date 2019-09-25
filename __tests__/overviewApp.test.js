const React = require("react");
const Enzyme = require("enzyme");
const { shallow } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const App = require("../client/src/components/Overview/App.jsx");
const ImageGallery = require("../client/src/components/Overview/ImageGallery.jsx");
const ImageGalleryList = require("../client/src/components/Overview/ImageGalleryList.jsx");
const QuantitySizeSelect = require("../client/src/components/Overview/QuantitySizeSelect.jsx");
const StyleSelector = require("../client/src/components/Overview/StyleSelector.jsx");
const ShowCart = require("../client/src/components/Overview/ShowCart.jsx");
const ProductInformation = require("../client/src/components/Overview/ProductInformation.jsx");
const AddCartMessage = require("../client/src/components/Overview/AddCartMessage.jsx");
const ViewButton = require("../client/src/components/Overview/ViewButton.jsx");
const ProductDescription = require("../client/src/components/Overview/ProductDescription.jsx");
const AddToCart = require("../client/src/components/Overview/AddToCart.jsx");

Enzyme.configure({ adapter: new Adapter() });

const initialProduct = {
  reviewsMeta: {
    product_id: "1",
    ratings: {
      "1": 1,
      "2": 2,
      "3": 5,
      "4": 4,
      "5": 3
    },
    recommended: {
      "0": 4,
      "1": 10,
      null: 1
    },
    characteristics: {
      Fit: {
        id: 1,
        value: "3.8000"
      },
      Length: {
        id: 2,
        value: "2.8667"
      },
      Comfort: {
        id: 3,
        value: "3.7333"
      },
      Quality: {
        id: 4,
        value: "3.3333"
      }
    },
    avgRating: 3.4,
    ratingRelFreq: {
      "1": 0.06666666666666667,
      "2": 0.13333333333333333,
      "3": 0.3333333333333333,
      "4": 0.26666666666666666,
      "5": 0.2
    }
  },
  currentProduct: {
    id: 1,
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description:
      "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140",
    features: [
      {
        feature: "Buttons",
        value: "Brass"
      }
    ]
  },
  productStyles: [
    {
      style_id: 1,
      name: "Forest Green & Black",
      original_price: "140",
      sale_price: "0",
      "default?": 1,
      photos: [
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        }
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XL: 15
      }
    }
  ]
};

describe("Overview component renders", () => {
  test("App displays on page", () => {
    let wrapper = shallow(<App initialProduct={initialProduct} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("Image gallery displays on page", () => {
    let wrapper = shallow(
      <ImageGallery initialProduct={initialProduct} styles={{}} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("Image gallery list displays on page", () => {
    let wrapper = shallow(
      <ImageGalleryList initialProduct={initialProduct} styles={{}} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("Quantity size select displays on page", () => {
    let wrapper = shallow(
      <QuantitySizeSelect initialProduct={initialProduct} styles={{}} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("Style selector displays on page", () => {
    let wrapper = shallow(
      <StyleSelector initialProduct={initialProduct} styles={{}} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("Show cart displays on page", () => {
    let wrapper = shallow(<ShowCart productImages={[]} productInfo={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("Product information displays on page", () => {
    let wrapper = shallow(
      <ProductInformation initialProduct={initialProduct} styles={{}} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("Added to cart message displays on page", () => {
    let wrapper = shallow(<AddCartMessage />);
    expect(wrapper.exists()).toBe(true);
  });

  test("View button displays on page", () => {
    let wrapper = shallow(<ViewButton />);
    expect(wrapper.exists()).toBe(true);
  });

  test("Product description displays on page", () => {
    let wrapper = shallow(
      <ProductDescription initialProduct={initialProduct} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("Add to cart button displays on page", () => {
    let wrapper = shallow(<AddToCart />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Overview component functionality", () => {
  test("Clicking on style selector button changes style", () => {
    const mockCallBack = jest.fn();
    let wrapper = shallow(
      <StyleSelector
        initialProduct={initialProduct}
        styles={{}}
        changeStyle={mockCallBack}
        handleSelect={mockCallBack}
      />
    );
    wrapper.find(".styleSelect").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(2);
  });

  test("Clicking on main carousel image will expand the view", () => {
    const mockCallBack = jest.fn();
    let wrapper = shallow(
      <ImageGallery
        initialProduct={initialProduct}
        styles={{}}
        handleExpand={mockCallBack}
      />
    );
    wrapper.find(".expandImage").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("Clicking on add to cart will add item to cart", () => {
    const mockCallBack = jest.fn();
    let wrapper = shallow(<AddCartMessage handleCartClick={mockCallBack} />);
    wrapper.find("#addToCart").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
