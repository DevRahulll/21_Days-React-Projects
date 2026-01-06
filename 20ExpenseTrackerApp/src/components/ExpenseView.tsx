import type { TransactionType } from "@/context/context";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface ExpenseViewProps {
  type: "income" | "expense";
  data: TransactionType[];
}

export default function ExpenseView({ type, data }: ExpenseViewProps) {
  // Filter data by type
  const filteredData = data.filter((item) => item.type === type);

  // Calculate total for this type
  const total = filteredData.reduce((sum, item) => sum + item.amount, 0);

  // Color scheme based on type
  const colors = {
    income: {
      bg: "green.50",
      border: "green.100",
      text: "green.700",
      heading: "green.700",
    },
    expense: {
      bg: "red.50",
      border: "red.100",
      text: "red.700",
      heading: "red.700",
    },
  };

  const currentColors = colors[type];

  return (
    <Box
      flex={1}
      w="full"
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
      rounded={"xl"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={"4"}>
        <Heading size={"md"} color={currentColors.heading}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
        <Text fontSize="lg" fontWeight="bold" color={currentColors.text}>
          Total: ₹ {total.toFixed(2)}
        </Text>
      </Flex>

      {filteredData.length === 0 ? (
        <Text textAlign="center" color="gray.500" py={4}>
          No {type === "income" ? "income" : "expense"} transactions yet
        </Text>
      ) : (
        filteredData.map((item, index) => (
          <Flex
            key={`${item.description}-${index}-${item.amount}`}
            bg={currentColors.bg}
            mt={"3"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={currentColors.border}
            p={"3"}
            borderRadius={"8"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "md",
              transition: "all 0.2s",
            }}
          >
            <Flex alignItems={"center"}>
              <Text fontWeight={"bold"} color={"gray.700"}>
                {item.description}
              </Text>
            </Flex>
            <Text fontSize="md" fontWeight="bold" color={currentColors.text}>
              ₹ {item.amount.toFixed(2)}
            </Text>
          </Flex>
        ))
      )}
    </Box>
  );
}
