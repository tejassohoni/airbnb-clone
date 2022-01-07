export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 py-32 px-14 bg-gray-100">
      <div className="footerText">
        <h5 className="font-bold">ABOUT</h5>
        <p className="footerSubText">Newsroom</p>
        <p className="footerSubText">Learn about new features</p>
        <p className="footerSubText">Letter from our founders</p>
        <p className="footerSubText">Careers</p>
        <p className="footerSubText">Investors</p>
      </div>
      <div className="footerText">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="footerSubText">Accessibility</p>
        <p className="footerSubText">Airbnb.org: disaster relief housing </p>
        <p className="footerSubText">Support Afghan refugees</p>
        <p className="footerSubText">Celebrating diversity & belonging</p>
        <p className="footerSubText">Combating discrimination</p>
      </div>
      <div className="footerText">
        <h5 className="font-bold">HOST</h5>
        <p className="footerSubText">Try hosting</p>
        <p className="footerSubText">Explore hosting resources</p>
        <p className="footerSubText">Letter from our founders</p>
        <p className="footerSubText">Visit our community forum</p>
        <p className="footerSubText">How to host responsibly</p>
      </div>
      <div className="footerText">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="footerSubText">Help Centre</p>
        <p className="footerSubText">Safety information</p>
        <p className="footerSubText">Cancellation options</p>
        <p className="footerSubText">Our COVID-19 Response</p>
        <p className="footerSubText">Supporting people with disabilities</p>
      </div>
    </div>
  );
}
