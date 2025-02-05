import {
  FC,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  KeyboardEventHandler,
} from "react";
import SearchBar from "./search-bar";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

interface ILocationComponent {
  locationQuery: string;
  setLocationQuery: Dispatch<SetStateAction<string>>;
  dateQuery: string;
  setDateQuery: Dispatch<SetStateAction<string>>;
  handleKeyDown: KeyboardEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
}

const LocationComponent: FC<ILocationComponent> = ({
  locationQuery,
  setLocationQuery,
  dateQuery,
  setDateQuery,
  handleSubmit,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // GETTING DATA FROM INPUT BAR
  const onSearchLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(event.target.value);
  };

  const onSearchDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateQuery(event.target.value);
  };

  return (
    <main className={""}>
      {isClient && (
        <div className={"flex flex-col"}>
          <SearchBar
            type={"text"}
            placeholder="What city are you located in?"
            value={locationQuery}
            onChangeHandler={onSearchLocationChange}
          />
          <SearchBar
            type={"date"}
            placeholder={"date"}
            value={dateQuery}
            onChangeHandler={onSearchDateChange}
          />
          <Button onClick={handleSubmit}>
            <Search className={"text-primary"} size={30} />
          </Button>
        </div>
      )}
    </main>
  );
};

export default LocationComponent;
