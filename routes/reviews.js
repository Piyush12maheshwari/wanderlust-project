const express=require("express");
const router=express.Router({mergeParams: true});
const Review = require("../models/review.js");
const wrapAsync=require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middlewarre.js")
const reviewController=require("../controllers/reviews.js")

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

router.delete("/:reviewID",isLoggedIn,isReviewAuthor ,wrapAsync(reviewController.detroyreviews)
);

module.exports=router;


