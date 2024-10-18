export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to iameric. We respect your privacy and are committed to protecting your personal data.</p>
        
        <h2>2. The data we collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
        <ul>
          <li>Identity Data</li>
          <li>Contact Data</li>
          <li>Technical Data</li>
          <li>Usage Data</li>
        </ul>
        
        <h2>3. How we use your data</h2>
        <p>We use your data to provide and improve our services, communicate with you, and comply with legal obligations.</p>
        
        <h2>4. Data security</h2>
        <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.</p>
        
        <h2>5. Your legal rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, or restrict the processing of your personal data.</p>
        
        <h2>6. Contact us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@iameric.com.</p>
      </div>
    </div>
  );
}