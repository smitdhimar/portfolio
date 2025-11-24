const userDetails ={
    name: process.env.NEXT_PUBLIC_NAME, 
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || "Portfolio"
} 

const contactDetails = {
    emailId : process.env.NEXT_PUBLIC_EMAIL_ID,
    socialMediaUsername : process.env.NEXT_PUBLIC_SOCIAL_MEDIA_USERNAME
}
export { userDetails, contactDetails}