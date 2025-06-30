import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "dejeferj@gmail.com", // Target email
      subject: "",
      html: ""
    }

    // Determine the form type and set email content accordingly
    if (formData.formType === 'partnership') {
      // Partnership form
      const { name, email, phone, company, partnership, message } = formData
      
      mailOptions.subject = "New Partnership Request from Nippon Website"
      mailOptions.html = `
        <h2>New Partnership Request</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Partnership Type:</strong> ${partnership}</p>
        <p><strong>Additional Information:</strong> ${message || "None provided"}</p>
      `
    } else if (formData.formType === 'booking') {
      // Book A Call form
      const {
        fullName,
        emailAddress,
        phoneNumber,
        companyName,
        role,
        businessType,
        otherBusinessType,
        interestedCategories,
        otherCategory,
        operationArea,
        primaryGoal,
        otherGoal,
        challenges,
        currentSuppliers,
        purchaseVolume,
        callDate,
        specificTopics
      } = formData;
      
      mailOptions.subject = "New Booking Request from Nippon Website"
      mailOptions.html = `
        <h2>New Book A Call Request</h2>
        
        <h3>Basic Contact Information</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email Address:</strong> ${emailAddress}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber || "Not provided"}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Role/Title:</strong> ${role || "Not provided"}</p>
        
        <h3>Business Type and Nature</h3>
        <p><strong>Business Type:</strong> ${businessType}${businessType === 'other' ? ` (${otherBusinessType})` : ''}</p>
        <p><strong>Interested Categories:</strong> ${interestedCategories.join(', ')}${interestedCategories.includes('Other') ? ` (${otherCategory})` : ''}</p>
        <p><strong>Area of Operation:</strong> ${operationArea}</p>
        
        <h3>Current Needs and Challenges</h3>
        <p><strong>Primary Goal:</strong> ${primaryGoal || "Not specified"}${primaryGoal === 'Other' ? ` (${otherGoal})` : ''}</p>
        <p><strong>Key Challenges:</strong> ${challenges || "Not provided"}</p>
        <p><strong>Current Suppliers:</strong> ${currentSuppliers || "Not provided"}</p>
        
        <h3>Purchase Volume and Scale</h3>
        <p><strong>Estimated Purchase Volume:</strong> ${purchaseVolume || "Not specified"}</p>
        
        <h3>Call Logistics</h3>
        <p><strong>Preferred Call Date:</strong> ${callDate ? new Date(callDate).toLocaleDateString() : "Not specified"}</p>
        <p><strong>Specific Topics to Discuss:</strong> ${specificTopics || "Not provided"}</p>
      `
    } else {
      // Contact form
      const { name, email, phone, subject, message, location, products } = formData
      
      mailOptions.subject = `New Contact from Nippon Website: ${subject}`
      mailOptions.html = `
        <h2>New Contact/Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <p><strong>Location:</strong> ${location || "Not provided"}</p>
        <p><strong>Products of Interest:</strong> ${products || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>') || "No message content"}</p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
} 