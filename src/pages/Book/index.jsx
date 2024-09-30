import BookingForm from "../../components/BookingForm/BookingForm";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";

const Book = () => {
  const bookImg =
    "https://images.unsplash.com/photo-1551887194-1d5f13080a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <SecondaryHeroSection
        index={3}
        title={"Book"}
        subtitle={"Make a Reservation"}
      />

      <div>
        {/* working hours details */}
        <div className="grid place-items-center bg-[#121217] pt-20 pb-48">
          <div className="text-center">
            <div className="mb-12">
              <h1 className="text-white text-2xl font-bold tracking-[0.3em] mb-2">
                WE'RE OPEN
              </h1>
              <p className="font-medium text-2xl text-amber-400 font-['dancing_script'] tracking-[0.2em]">
                Everyday!
              </p>
            </div>
            <div className="space-y-4 text-[#ffffff96]">
              <div>
                <p>Monday - Friday</p>
                <p>08.00 - 21.00</p>
              </div>
              <div className="w-36 h-[1px] bg-[#ca8e46] mx-auto"></div>
              <div>
                <p>Saturday & Sunday</p>
                <p>10.00 - 23.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* Booking form */}
        <div
          style={{
            backgroundImage: `url(${bookImg})`,
          }}
          className="py-20 bg-cover bg-center bg-no-repeat bg-fixed"
        >
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Book;
