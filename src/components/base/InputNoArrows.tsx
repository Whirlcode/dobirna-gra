import ExtendedInput from "@app/components/base/ExtendedInput";

export default function InputWithoutArrows({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <ExtendedInput
        label="Count of players"
        placeholder="10 max"
        hideArrow={true}
        type="number"
        sx={{
          minHeight: 60
        }}
        variant="outlined"
        endDecorator={false}
        color={count > 10 ? "danger" : "neutral"}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
    </>
  );
}
