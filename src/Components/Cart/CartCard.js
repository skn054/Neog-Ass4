import "./CartCard.css";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

export const CartCard = ({ product, wishlistPage, cartPage }) => {
  //   const { addToWishlist, isPresentInWishlist, deleteFromWishlist } =
  //     useContext(CartContext);
  const { removeFromCart, updateQuantityInCart } = useContext(CartContext);

  const { id, price, qty, item_image_url, name, rName } = product;

  const removeFromCartBtnHandler = (e, product) => {
    e.preventDefault();
    removeFromCart(product);
  };

  const updateQuantityBtnHandler = (e, product, actionType) => {
    e.preventDefault();
    updateQuantityInCart(product, actionType);
  };

  return (
    <div className="cart_book_card_navlink">
      <li key={id} className="cart_book_card">
        <img src={item_image_url} alt={name} />
        <div onClick={(e) => e.preventDefault()}>
          {/* {isPresentInWishlist(product) !== -1 ? (
            <FavoriteIcon
              className="wishlist_icon"
              onClick={() => deleteFromWishlist(product)}
            />
          ) : (
            <FavoriteBorderIcon
              className="wishlist_icon"
              onClick={() => addToWishlist(product)}
            />
          )} */}
        </div>
        <div className="cart_book_card_content">
          <h3 className="cart_book_card_content_title">{rName}</h3>
          <p className="cart_book_card_content_author">{name}</p>
          <div className="cart_book_card_content_price_wrapper">
            <div className="cart_book_card_content_price">
              {/* <p>₹ {price}</p> */}
              <h2>₹ {price}</h2>
            </div>
          </div>
          <div className="cart_book_card_qty_remove">
            <div className="cart_book_card_qty_wrapper">
              <div className="cart_book_card_qty">
                <button
                  style={{ cursor: qty === 1 && "not-allowed" }}
                  disabled={qty === 1}
                  onClick={(e) =>
                    updateQuantityBtnHandler(e, product, "decrement")
                  }
                >
                  -
                </button>
                <p>{qty}</p>
                <button
                  onClick={(e) =>
                    updateQuantityBtnHandler(e, product, "increment")
                  }
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="cart_book_card_qty_remove_btn"
              onClick={(e) => removeFromCartBtnHandler(e, product)}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </li>{" "}
    </div>
  );
};
