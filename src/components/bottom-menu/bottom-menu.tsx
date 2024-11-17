import options from './options';

const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 items-center h-[75px] w-full bg-secondary-background flex justify-evenly rounded-t-lg">
      {options.map((option) => (
        <option.icon key={option.id} color="#00A1FF" />
      ))}
    </div>
  );
};

export default BottomMenu;
