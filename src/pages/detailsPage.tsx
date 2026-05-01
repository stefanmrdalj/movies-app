import Header from "../components/header";
import DetailsContent from "../components/detailsContent";
import MobileFooterNavigation from "../components/mobileFooterNavigation";

const DetailsPage = () => {
  return (
    <div className="detailsPage">
      <Header />
      <DetailsContent />
      <MobileFooterNavigation />
    </div>
  );
};

export default DetailsPage;
