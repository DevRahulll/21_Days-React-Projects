import {
  Button,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  Field,
  Input,
  RadioGroup,
} from "@chakra-ui/react";
import useGlobalContext from "@/hooks/useGlobalContext";
import type { ChangeEvent, FormEvent } from "react";

interface AddTransactionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTransaction({
  onClose,
  isOpen,
}: AddTransactionProps) {
  const { formData, setFormData, value, setValue, handleSubmit } =
    useGlobalContext();

  function handleFormChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  }

  function onFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleSubmit(formData);
    onClose();
  }
  return (
    <DialogRoot open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>Add New Transaction</DialogHeader>
        <DialogCloseTrigger />

        <form onSubmit={onFormSubmit}>
          <DialogBody>
            <Field.Root>
              <Field.Label>Enter Description</Field.Label>
              <Input
                placeContent="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </Field.Root>
            <Field.Root mt={"4"}>
              <Field.Label>Enter Amount</Field.Label>
              <Input
                placeContent="Enter Transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </Field.Root>

            <RadioGroup.Root value={value} mt="5">
              <RadioGroup.Item value="income">
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Income</RadioGroup.ItemText>
              </RadioGroup.Item>

              <RadioGroup.Item value="expense">
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </DialogBody>

          <DialogFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" colorScheme={"blue"} onClick={onClose}>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogRoot>
  );
}
