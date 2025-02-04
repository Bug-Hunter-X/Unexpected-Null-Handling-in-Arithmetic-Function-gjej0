# Unexpected Null Handling in Arithmetic Function

This repository demonstrates a common but subtle error in JavaScript involving null value handling in arithmetic operations.  The provided code handles null values by returning 0.  While this might seem reasonable at first glance, there are situations where this behavior can be undesirable. Depending on the context and expected behavior of your application, it could be more appropriate to throw an error when null values are encountered. This would make the error handling more explicit and help prevent unexpected behavior further down the line.

## Bug Description

The primary issue is the silent handling of null values in `foo`.  Returning 0 might mask underlying issues or lead to incorrect calculations. It is usually safer to throw an error in this case to identify the source of null values.

## Solution

The provided solution file demonstrates a more robust approach that throws an error when null values are encountered.
