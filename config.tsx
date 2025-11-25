const userDetails ={
    name: process.env.NEXT_PUBLIC_NAME || "Smit Dhimar", 
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || "Portfolio | Smit Dhimar"
} 

const contactDetails = {
    emailId : process.env.NEXT_PUBLIC_EMAIL_ID || "smitdhimar61@gmail.com",
    socialMediaUsername : process.env.NEXT_PUBLIC_SOCIAL_MEDIA_USERNAME || "smitdhimar"
}
export { userDetails, contactDetails}