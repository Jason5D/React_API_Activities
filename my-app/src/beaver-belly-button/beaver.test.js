    import React from "react";
    import { render, screen } from "@testing-library/react";
    import { test, expect } from "@jest/globals";
    import BeaverBellyButton from "./beaver-belly-button";
    
    test("Does the beaver image render on the page", function () {
      render(<BeaverBellyButton />);
      const imageBeaver = screen.getByTestId("image");
    expect(imageBeaver).toBeInTheDocument();
    });

    test("Does the main header render on the page", function () {
      render(<BeaverBellyButton />);
      const h1 = screen.getByTestId("mainheader");
    expect(h1).toBeInTheDocument();
    });

    test("Can i click the beaver to generate an api data", async function () {
        render(<BeaverBellyButton />);
        const beaver = screen.getByAltText("beaver");
        beaver.click();
        const apiData = await screen.findByTestId("api-data");
        expect(apiData).toBeInTheDocument();
      });