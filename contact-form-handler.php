<?php
/**
 * Nippon Site Contact Form Handler
 * 
 * This script handles form submissions from the static Next.js site.
 * Upload this file to your cPanel hosting and point your forms to it.
 */

// Set headers to allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// For preflight OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get the JSON body
$json = file_get_contents('php://input');
$formData = json_decode($json, true);

// If not JSON data, try POST data
if (!$formData) {
    $formData = $_POST;
}

// Validate that we have some data
if (empty($formData)) {
    http_response_code(400);
    echo json_encode(['error' => 'No form data received']);
    exit();
}

// Set recipient email - Change this to your email address
$toEmail = "your-email@example.com";

// Initialize variables
$subject = "";
$emailBody = "";

// Process different form types
if (isset($formData['formType'])) {
    switch ($formData['formType']) {
        case 'partnership':
            // Partnership form
            $name = sanitize($formData['name'] ?? '');
            $email = sanitize($formData['email'] ?? '');
            $phone = sanitize($formData['phone'] ?? '');
            $company = sanitize($formData['company'] ?? '');
            $partnership = sanitize($formData['partnership'] ?? '');
            $message = sanitize($formData['message'] ?? '');
            
            $subject = "New Partnership Request from Nippon Website";
            $emailBody = "
                <h2>New Partnership Request</h2>
                <p><strong>Full Name:</strong> {$name}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Phone:</strong> {$phone}</p>
                <p><strong>Company:</strong> {$company}</p>
                <p><strong>Partnership Type:</strong> {$partnership}</p>
                <p><strong>Additional Information:</strong> {$message}</p>
            ";
            break;
            
        case 'booking':
            // Book A Call form
            $fullName = sanitize($formData['fullName'] ?? '');
            $emailAddress = sanitize($formData['emailAddress'] ?? '');
            $phoneNumber = sanitize($formData['phoneNumber'] ?? '');
            $companyName = sanitize($formData['companyName'] ?? '');
            $role = sanitize($formData['role'] ?? '');
            $businessType = sanitize($formData['businessType'] ?? '');
            $otherBusinessType = sanitize($formData['otherBusinessType'] ?? '');
            $interestedCategories = $formData['interestedCategories'] ?? [];
            $otherCategory = sanitize($formData['otherCategory'] ?? '');
            $operationArea = sanitize($formData['operationArea'] ?? '');
            $primaryGoal = sanitize($formData['primaryGoal'] ?? '');
            $otherGoal = sanitize($formData['otherGoal'] ?? '');
            $challenges = sanitize($formData['challenges'] ?? '');
            $currentSuppliers = sanitize($formData['currentSuppliers'] ?? '');
            $purchaseVolume = sanitize($formData['purchaseVolume'] ?? '');
            $callDate = sanitize($formData['callDate'] ?? '');
            $specificTopics = sanitize($formData['specificTopics'] ?? '');
            
            // Convert array to string
            $categories = is_array($interestedCategories) 
                ? implode(', ', $interestedCategories) 
                : $interestedCategories;
            
            $subject = "New Booking Request from Nippon Website";
            $emailBody = "
                <h2>New Book A Call Request</h2>
                
                <h3>Basic Contact Information</h3>
                <p><strong>Full Name:</strong> {$fullName}</p>
                <p><strong>Email Address:</strong> {$emailAddress}</p>
                <p><strong>Phone Number:</strong> {$phoneNumber}</p>
                <p><strong>Company Name:</strong> {$companyName}</p>
                <p><strong>Role/Title:</strong> {$role}</p>
                
                <h3>Business Type and Nature</h3>
                <p><strong>Business Type:</strong> {$businessType}" . 
                ($businessType === 'other' ? " ({$otherBusinessType})" : "") . "</p>
                <p><strong>Interested Categories:</strong> {$categories}" . 
                (strpos($categories, 'Other') !== false ? " ({$otherCategory})" : "") . "</p>
                <p><strong>Area of Operation:</strong> {$operationArea}</p>
                
                <h3>Current Needs and Challenges</h3>
                <p><strong>Primary Goal:</strong> {$primaryGoal}" . 
                ($primaryGoal === 'Other' ? " ({$otherGoal})" : "") . "</p>
                <p><strong>Key Challenges:</strong> {$challenges}</p>
                <p><strong>Current Suppliers:</strong> {$currentSuppliers}</p>
                
                <h3>Purchase Volume and Scale</h3>
                <p><strong>Estimated Purchase Volume:</strong> {$purchaseVolume}</p>
                
                <h3>Call Logistics</h3>
                <p><strong>Preferred Call Date:</strong> {$callDate}</p>
                <p><strong>Specific Topics to Discuss:</strong> {$specificTopics}</p>
            ";
            break;
            
        default:
            // Contact form (default)
            $name = sanitize($formData['name'] ?? '');
            $email = sanitize($formData['email'] ?? '');
            $phone = sanitize($formData['phone'] ?? '');
            $subject = sanitize($formData['subject'] ?? 'Contact Form Submission');
            $message = sanitize($formData['message'] ?? '');
            $location = sanitize($formData['location'] ?? '');
            $products = sanitize($formData['products'] ?? '');
            
            $emailBody = "
                <h2>New Contact/Inquiry</h2>
                <p><strong>Name:</strong> {$name}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Phone:</strong> {$phone}</p>
                <p><strong>Subject:</strong> {$subject}</p>
                <p><strong>Location:</strong> {$location}</p>
                <p><strong>Products of Interest:</strong> {$products}</p>
                <h3>Message:</h3>
                <p>" . nl2br($message) . "</p>
            ";
            break;
    }
} else {
    // Generic form handling if formType not specified
    $emailBody = "<h2>New Form Submission</h2><ul>";
    
    foreach ($formData as $key => $value) {
        if (is_array($value)) {
            $value = implode(', ', $value);
        }
        $emailBody .= "<li><strong>" . ucfirst($key) . ":</strong> " . sanitize($value) . "</li>";
    }
    
    $emailBody .= "</ul>";
    $subject = "New Form Submission from Nippon Website";
}

// Send email
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: website@yourdomain.com',
    'Reply-To: ' . ($email ?? $emailAddress ?? 'no-reply@yourdomain.com')
];

$success = mail($toEmail, $subject, $emailBody, implode("\r\n", $headers));

// Return response
if ($success) {
    http_response_code(200);
    echo json_encode(['message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again later.']);
}

/**
 * Sanitize user input
 */
function sanitize($input) {
    return htmlspecialchars(strip_tags(trim($input)));
} 