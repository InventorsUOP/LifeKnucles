import { FlatList } from "react-native";
import HomeAlertCard from "./HomeAlertCard";

const DATA = [
  {
    id: "1",
    title: "Title 1",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    confirmedCount: 5,
    spamCount: 2,
    current: true,
  },
  {
    id: "2",
    title: "Title 2",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    confirmedCount: 8,
    spamCount: 3,
    current: false,
  },
  {
    id: "3",
    title: "Title 3",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    confirmedCount: 5,
    spamCount: 2,
    current: false,
  },
  {
    id: "4",
    title: "Title 4",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    confirmedCount: 50,
    spamCount: 25,
    current: false,
  },
  {
    id: "5",
    title: "Title 5",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    confirmedCount: 15,
    spamCount: 32,
    current: false,
  },
];

export default function HomeAlert() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <HomeAlertCard
          id={item.id}
          title={item.title}
          date={item.date}
          time={item.time}
          description={item.description}
          confirmedCount={item.confirmedCount}
          spamCount={item.spamCount}
          current={item.current}
        />
      )}
      keyExtractor={(item) => item.id}
      className="m-3"
    />
  );
}
