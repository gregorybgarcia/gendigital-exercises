/*
 * Numeric Input Component
 *   HTML (initial state): <input type="text" class="c-numeric-input" />
 *   Requirement:
 *   - should only accept numeric value only such as: 1, 1.2, -5, or 1000 // OK
 *   - if user enters leading zero, or .  when user moves focus away from the input, it should
 *     change to correct format:
 *       .1 ==> 0.1 and 01 => 1 // OK
 *   - if user enter invalid character/value, HTML should change to this // OK
 *       <input type="text" class="c-numeric-input c-numeric-input--error" />
 *       <span class="c-numeric-input__error-msg">invalid input</span>
 *   - if user enter valid value and move focus away from the input HTML should change to this: // OK
 *       <input type="text" class="c-numeric-input c-numeric-input--valid" />
 *   - if user focus on the input or user clear value from the input, // OK
 *     HTML should return to initial stage
 *
 * Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show // OK
 * red or green border to the input
 * */

let invalidInput = document.createElement("span");
invalidInput.classList.add("c-numeric-input__error-msg");
invalidInput.textContent = "Invalid input";

const isNumber = (value) => /^[-+]?\d*\.?\d+$/.test(value);

const onBlurValidation = (elem) => {
  if(!elem.value) return;

  if (isNumber(elem.value)) {
    elem.classList.add("c-numeric-input--valid");
    if (
      elem.value.startsWith("0") &&
      !elem.value.startsWith("0.") &&
      elem.value.length > 1
    ) {
      elem.value = elem.value.replace("0", "");
    }

    if (elem.value.startsWith("-.")) {
      elem.value = elem.value.replace("-.", "-0.");
    }

    if (elem.value.startsWith(".")) {
      elem.value = elem.value.replace(".", "0.");
    }

    if (elem.value === "0") {
      elem.value = "0";
    }

    if (elem.value === "-0") {
      elem.value = "0";
    }
  } else {
    elem.classList.add("c-numeric-input--error");
    elem.parentNode.appendChild(invalidInput);
  }
};

const inputReset = (elem) => {
  elem.classList.remove("c-numeric-input--error");
  elem.classList.remove("c-numeric-input--valid");
  elem.value = "";
  invalidInput.remove();
};

const NumericInput = {
  init: () => {
    document.querySelectorAll(".c-numeric-input").forEach((elem) => {
      elem.addEventListener("input", () => {
        if (elem.value === "00") return (elem.value = "0");
        if (elem.value === "-00") return (elem.value = "-0");
      });

      elem.addEventListener("focus", () => {
        inputReset(elem);
      });

      elem.addEventListener("blur", () => {
        onBlurValidation(elem);
      });
    });
  },
};
document.addEventListener("DOMContentLoaded", NumericInput.init);
