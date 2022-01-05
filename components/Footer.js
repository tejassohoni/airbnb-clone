export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 py-32 px-14 bg-gray-100">
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
      </div>
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Airbnb.org: disaster relief housing </p>
        <p>Support Afghan refugees</p>
        <p>Celebrating diversity & belonging</p>
        <p>Combating discrimination</p>
      </div>
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Try hosting</p>
        <p>Explore hosting resources</p>
        <p>Letter from our founders</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Supporting people with disabilities</p>
      </div>
    </div>
  );
}
