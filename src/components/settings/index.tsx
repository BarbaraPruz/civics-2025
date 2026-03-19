import Select, { type CSSObjectWithLabel, type SingleValue } from "react-select";
import useAppStore from "@/store/useAppStore";
import { Categories, type Category } from "@/types/category";

type OptionType = { label: string; value: string };

const categoryOptions = Object.values(Categories).map((cat) => ({
  value: cat,
  label: cat,
}));

const selectStyles = {
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontSize: "18px",
    width: 175,
  }),
  option: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "#000000",
    fontSize: "18px",
    width: 175,
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "#000000",
    fontSize: "18px",
    width: 175,
  }),
};

const Settings = () => {
  const category = useAppStore((state) => state.category);
  const quizRetryList = useAppStore((state) => state.quizRetryList);
  const setCategory = useAppStore((state) => state.setCategory);
  const setQuizRetryList = useAppStore((state) => state.setQuizRetryList);
  const retryList = useAppStore((state) => state.retryList);
  const resetRetryList = useAppStore((state) => state.resetRetryList);

  const onSelectCategory = (selected: SingleValue<OptionType>) => {
    if (selected) setCategory(selected.value as Category);
  };

  const handleCheck = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setQuizRetryList(evt.target.checked);
  };

  const handleResetRetryList = () => resetRetryList();

  return (
    <div className="w-[95vw] md:w-2xl my-4 mx-auto p-4 bg-(--color-steel-blue) rounded m-auto">
      <div className="text-white flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center">
          <label
            htmlFor="categorySelect"
            className={`text-lg block fw-semibold pr-1`}
          >
            Category
          </label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            value={
              categoryOptions.find((opt) => opt.value === category) ?? null
            }
            onChange={onSelectCategory}
            isMulti={false}
            isSearchable={false}
            options={categoryOptions}
            styles={selectStyles}
          />
        </div>
        {retryList.size > 0 && (
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <span className="select-none ms-3 text-lg font-medium text-heading me-1">
                All Questions
              </span>
              <input
                type="checkbox"
                onChange={handleCheck}
                value={quizRetryList ? "true" : "false"}
                checked={quizRetryList ? true : false}
                className="sr-only peer"
              />
              <div
                className="relative w-9 h-5 bg-neutral-quaternary 
  ring-1 ring-gray-300
  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft 
  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
  peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"
              ></div>{" "}
              <span className="select-none ms-1 text-lg font-medium text-heading">
                Retry Questions
              </span>
            </label>
            <button
              onClick={handleResetRetryList}
              className="w-sm bg-(--color-red-accent) text-white text-xl rounded-lg"
            >
              <span>Reset Retry List (Count {retryList.size})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
