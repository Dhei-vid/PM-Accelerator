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

interface ILocationComponent {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  handleKeyDown: KeyboardEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
}

const LocationComponent: FC<ILocationComponent> = ({
  query,
  setQuery,
  handleKeyDown,
  handleSubmit,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // GETTING DATA FROM INPUT BAR
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <main className={""}>
      {isClient && (
        <SearchBar
          placeholder="What city are you located in?"
          location={query}
          onChangeHandler={onSearchChange}
          onKeyDown={handleKeyDown}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
};

export default LocationComponent;
