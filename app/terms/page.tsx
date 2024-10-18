export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using iameric, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2>2. Description of Service</h2>
        <p>iameric provides a platform to document and share Eric's football training journey from infancy.</p>
        
        <h2>3. User Conduct</h2>
        <p>You agree to use iameric only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
        
        <h2>4. Intellectual Property</h2>
        <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to iameric are protected under applicable copyrights, trademarks and other proprietary rights.</p>
        
        <h2>5. Disclaimer of Warranties</h2>
        <p>iameric is provided on an 'as is' basis without any warranties of any kind.</p>
        
        <h2>6. Limitation of Liability</h2>
        <p>In no event will iameric be liable for any damages whatsoever arising out of the use of or inability to use iameric.</p>
        
        <h2>7. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Please review these terms periodically for changes.</p>
        
        <h2>8. Contact Information</h2>
        <p>If you have any questions about these terms, please contact us at terms@iameric.com.</p>
      </div>
    </div>
  );
}