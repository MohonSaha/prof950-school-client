import ClassroomCarousel from "@/components/pagesUi/Home/ClassroomSection/ClassroomSection";
import HeroSlider from "@/components/pagesUi/Home/HeroSlider/HeroSlider";
import EnhancedGallery from "@/components/pagesUi/Home/ImageGallery/ImageGallery";
import NoticeBoard from "@/components/pagesUi/Home/NoticeBoard/NoticeBoard";

const HomePage = () => {
  const galleryImages = [
    {
      id: "1",
      src: "https://i.ibb.co.com/spVsm6jw/chairmain.jpg",
      alt: "Large group photo with students and teachers",
      caption: "বক্তব্য রাখছেন প্রতিষ্ঠাতা",
      category: "Events",
    },
    {
      id: "2",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Person in blue suit giving a speech",
      caption: "দেশ গড়ার হবে দিশাদারী",
      category: "Speeches",
    },
    {
      id: "3",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Colorful event with decorations",
      caption: "দেশ গড়ার হবে দিশাদারী",
      category: "Events",
    },
    {
      id: "4",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Decorated event stage with people",
      caption: "শ্রদ্ধায় স্মরণ করা হয়েছে শহীদদের",
      category: "Events",
    },
    {
      id: "5",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Group of people at an event",
      caption: "অর্জন শিক্ষা এবং উন্নয়নের অভিজ্ঞতা",
      category: "Gatherings",
    },
    {
      id: "6",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Person on a decorated rickshaw",
      caption: "সৃজনশীল শিক্ষা দান",
      category: "Activities",
    },
    {
      id: "7",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Group of people on bicycles",
      caption: "গণতন্ত্র দিবস পালন করা",
      category: "Activities",
    },
    {
      id: "8",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Colorful indoor event",
      caption: "শিক্ষাঙ্গনে শিক্ষার আলো",
      category: "Events",
    },
    {
      id: "9",
      src: "https://i.ibb.co.com/S7DSC5r5/girls.jpg",
      alt: "Small group of people",
      caption: "শিক্ষা দানে সহযোগী দিনপঞ্জি",
      category: "Gatherings",
    },
    {
      id: "10",
      src: "https://i.ibb.co.com/gbrcZzX4/481270318-3962171960720851-4740464838177645568-n.jpg",
      alt: "Person in blue suit giving a speech",
      caption: "বক্তব্য রাখছেন বিদ্যালয় প্রধান",
      category: "Events",
    },
  ];

  const classrooms = [
    {
      id: 1,
      title: "প্রথম শ্রেণী",
      count: 15,
      description:
        "প্রাথমিক শিক্ষার জন্য আদর্শ ক্লাসরুম ও শিক্ষক, নিয়মিত ভাল উদ্দেশ্য ক্লাসের পরিবেশ এবং মানদণ্ড",
      imageUrl: "https://i.ibb.co.com/z8zS0WS/forest-3622519-640.jpg",
      buttonText: "বিস্তারিত দেখুন",
    },
    {
      id: 2,
      title: "দ্বিতীয় শ্রেণী",
      count: 12,
      description:
        "দ্বিতীয় শ্রেণি শিক্ষার জন্য আদর্শ ক্লাসরুম ও শিক্ষক, রচনামূলক শিক্ষাপদ্ধতি উন্নয়ন এবং গাইডবুক",
      imageUrl: "https://i.ibb.co.com/bFtwpFN/death.jpg",
      buttonText: "বিস্তারিত দেখুন",
    },
    {
      id: 3,
      title: "তৃতীয় শ্রেণী",
      count: 13,
      description:
        "তৃতীয় শ্রেণি শিক্ষার জন্য আদর্শ ক্লাসরুম ও শিক্ষক, রচনামূলক শিক্ষাপদ্ধতি উন্নয়ন এবং গাইডবুক",
      imageUrl: "https://i.ibb.co.com/z8zS0WS/forest-3622519-640.jpg",
      buttonText: "বিস্তারিত দেখুন",
    },
    {
      id: 4,
      title: "চতুর্থ শ্রেণী",
      count: 32,
      description:
        "চতুর্থ শ্রেণি শিক্ষার জন্য আদর্শ ক্লাসরুম ও শিক্ষক, রচনামূলক শিক্ষাপদ্ধতি উন্নয়ন এবং গাইডবুক",
      imageUrl: "https://i.ibb.co.com/bFtwpFN/death.jpg",
      buttonText: "বিস্তারিত দেখুন",
    },
    {
      id: 5,
      title: "পঞ্চম শ্রেণী",
      count: 18,
      description:
        "পঞ্চম শ্রেণি শিক্ষার জন্য আদর্শ ক্লাসরুম ও শিক্ষক, রচনামূলক শিক্ষাপদ্ধতি উন্নয়ন এবং গাইডবুক",
      imageUrl: "https://i.ibb.co.com/z8zS0WS/forest-3622519-640.jpg",
      buttonText: "বিস্তারিত দেখুন",
    },
    {
      id: 6,
      title: "ষষ্ঠ শ্রেণী",
      count: 22,
      description:
        "ষষ্ঠ শ্রেণি শিক্ষার জন্য আদর্শ ক্লাসরুম ও শিক্ষক, রচনামূলক শিক্ষাপদ্ধতি উন্নয়ন এবং গাইডবুক",
      imageUrl: "https://i.ibb.co.com/bFtwpFN/death.jpg",
      buttonText: "বিস্তারিত দেখুন",
    },
  ];

  return (
    <div className="mt-16 ">
      <HeroSlider />
      <NoticeBoard />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <EnhancedGallery
            images={galleryImages}
            title="Photo Gallery"
            // enableFilter={true}
          />
        </div>
      </main>
      <ClassroomCarousel
        classrooms={classrooms}
        title="একনজরে স্কুলের শ্রেণি কক্ষ গুলো"
        subtitle="প্লে থেকে দশম শ্রেণী পর্যন্ত যা যা থাকছে।"
      />
    </div>
  );
};

export default HomePage;
