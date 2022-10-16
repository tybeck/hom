import * as React from 'react';
import styled from 'styled-components/native';
import Svg, {SvgProps, Defs, ClipPath, Path, G, Image} from 'react-native-svg';

const LoyaltyCardView = styled.View`
  position: relative;
  transition: unset;
`;

const LoyaltyCard = (props: SvgProps) => {
  return (
    <LoyaltyCardView>
      <Svg viewBox={'0 0 286.404 187.422'} width="100%" height={213.422} {...props}>
        <Defs>
          <ClipPath id="a">
            <Path
              data-name="Rectangle 422"
              d="M15.062 0h256.28A15.062 15.062 0 0 1 286.4 15.062v144.156a15.062 15.062 0 0 1-15.062 15.062H15.063A15.063 15.063 0 0 1 0 159.217V15.062A15.062 15.062 0 0 1 15.062 0Z"
              transform="translate(235.44 -209.422)"
              fill="none"
            />
          </ClipPath>
        </Defs>
        <G data-name="Group 837">
          <G data-name="Group 822">
            <G
              data-name="Group 738"
              opacity={0.7}
              style={{
                mixBlendMode: 'multiply',
                isolation: 'isolate',
              }}
              transform="translate(-235.44 209.422)"
            >
              <Image
                data-name="Rectangle 405"
                width={283}
                height={77}
                transform="translate(237 -73)"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAABNCAYAAACWjcB/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGVmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTI4VDIxOjIyOjI3LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0yOFQyMToyMzo0MC0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wOC0yOFQyMToyMzo0MC0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2ZTBhN2ZkLTRlMzItNGQyNC05N2RjLTYzZDVmNmMzNzNiYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVjZTZlNzNhLWIyZjQtNDM0MC04MjAwLThhN2Q2Mzg5ZTY0MyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNkMjUzMmZjLTBmODItNDAxOC1iZjI2LTg1NWYxMjY2ZDhiNSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2QyNTMyZmMtMGY4Mi00MDE4LWJmMjYtODU1ZjEyNjZkOGI1IiBzdEV2dDp3aGVuPSIyMDIyLTA4LTI4VDIxOjIyOjI3LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNmUwYTdmZC00ZTMyLTRkMjQtOTdkYy02M2Q1ZjZjMzczYmMiIHN0RXZ0OndoZW49IjIwMjItMDgtMjhUMjE6MjM6NDAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhDXgEoAAB6DSURBVHja7Z1djF1XeYbPmTMztuP8OYkTO3EcJwFTEgSlBQSoIBGJiLaItmpV1FDU5qLqRYWEhFQVqVJR7ypuyiVKVVUqvaKQQtWKhopWoUIUKmiJDInzg+048X/iJJ7Y45k5p++zvd7DN8t7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"
              />
            </G>
            <G data-name="Group 739">
              <Path
                data-name="Rectangle 406"
                d="M15.062 0h256.28A15.062 15.062 0 0 1 286.4 15.062v144.156a15.062 15.062 0 0 1-15.062 15.062H15.063A15.063 15.063 0 0 1 0 159.217V15.062A15.062 15.062 0 0 1 15.062 0Z"
                fill="#fff"
              />
            </G>
            <G data-name="Group 821">
              <G data-name="Group 820" clipPath="url(#a)" transform="translate(-235.44 209.422)">
                <G data-name="Group 743">
                  <G data-name="Group 742">
                    <G data-name="Group 740">
                      <Path
                        data-name="Rectangle 407"
                        fill="#fff"
                        d="M254.517-273.666h19.076v84.744h-19.076z"
                      />
                      <Path
                        data-name="Rectangle 408"
                        fill="#fff"
                        d="M292.671-273.666h19.077v84.744h-19.077z"
                      />
                      <Path
                        data-name="Rectangle 409"
                        fill="#fff"
                        d="M368.934-273.666h19.076v84.744h-19.076z"
                      />
                      <Path
                        data-name="Rectangle 410"
                        fill="#fff"
                        d="M330.78-273.666h19.077v84.744H330.78z"
                      />
                      <Path
                        data-name="Rectangle 411"
                        fill="#fff"
                        d="M407.087-273.666h19.033v84.744h-19.033z"
                      />
                      <Path
                        data-name="Rectangle 412"
                        fill="#fff"
                        d="M445.196-273.666h19.076v84.744h-19.076z"
                      />
                      <Path
                        data-name="Rectangle 413"
                        fill="#fff"
                        d="M483.35-273.666h19.076v84.744H483.35z"
                      />
                      <Path
                        data-name="Path 4918"
                        d="M265.016-171.883H263.1a8.666 8.666 0 0 1-8.578-8.632v-8.407h19.077v8.407a8.637 8.637 0 0 1-8.578 8.632Z"
                        fill="#fff"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4919"
                        d="M303.17-171.883h-1.921a8.637 8.637 0 0 1-8.578-8.632v-8.407h19.077v8.407a8.666 8.666 0 0 1-8.578 8.632Z"
                        fill="#fff"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4920"
                        d="M379.433-171.883h-1.921a8.637 8.637 0 0 1-8.578-8.632v-8.407h19.077v8.407a8.638 8.638 0 0 1-8.578 8.632Z"
                        fill="#fff"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4921"
                        d="M341.324-171.883h-1.966a8.666 8.666 0 0 1-8.578-8.632v-8.407h19.077v8.407a8.627 8.627 0 0 1-8.533 8.632Z"
                        fill="#fff"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4922"
                        d="M493.85-171.883h-1.922a8.637 8.637 0 0 1-8.578-8.632v-8.407h19.077v8.407a8.666 8.666 0 0 1-8.577 8.632Z"
                        fill="#fff"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4923"
                        d="M417.587-171.883h-1.966a8.627 8.627 0 0 1-8.534-8.632v-8.407h19.033v8.407a8.629 8.629 0 0 1-8.533 8.632Z"
                        fill="#fff"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4924"
                        d="M455.7-171.883h-1.919a8.637 8.637 0 0 1-8.58-8.632v-8.407h19.076v8.407a8.636 8.636 0 0 1-8.577 8.632Z"
                        fill="#faeccd"
                        fillRule="evenodd"
                      />
                    </G>
                    <G data-name="Group 741">
                      <Path
                        data-name="Rectangle 414"
                        fill="#1087cb"
                        d="M235.44-273.666h19.077v84.744H235.44z"
                      />
                      <Path
                        data-name="Rectangle 415"
                        fill="#ff8e28"
                        d="M273.594-273.666h19.077v84.744h-19.077z"
                      />
                      <Path
                        data-name="Rectangle 416"
                        fill="#ff8e28"
                        d="M349.857-273.666h19.077v84.744h-19.077z"
                      />
                      <Path
                        data-name="Rectangle 417"
                        fill="#1087cb"
                        d="M311.748-273.666h19.032v84.744h-19.032z"
                      />
                      <Path
                        data-name="Rectangle 418"
                        fill="#1087cb"
                        d="M388.011-273.666h19.076v84.744h-19.076z"
                      />
                      <Path
                        data-name="Rectangle 419"
                        fill="#ff8e28"
                        d="M426.12-273.666h19.076v84.744H426.12z"
                      />
                      <Path
                        data-name="Rectangle 420"
                        fill="#1087cb"
                        d="M464.272-273.666h19.078v84.744h-19.078z"
                      />
                      <Path
                        data-name="Rectangle 421"
                        fill="#ff8e28"
                        d="M502.427-273.666h19.033v84.744h-19.033z"
                      />
                      <Path
                        data-name="Path 4925"
                        d="M244.018-171.883h1.966a8.627 8.627 0 0 0 8.533-8.632v-8.407H235.44v8.407a8.666 8.666 0 0 0 8.578 8.632Z"
                        fill="#1087cb"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4926"
                        d="M282.172-171.883h1.921a8.637 8.637 0 0 0 8.578-8.632v-8.407h-19.077v8.407a8.637 8.637 0 0 0 8.578 8.632Z"
                        fill="#ff8e28"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4927"
                        d="M358.435-171.883h1.921a8.637 8.637 0 0 0 8.578-8.632v-8.407h-19.077v8.407a8.666 8.666 0 0 0 8.578 8.632Z"
                        fill="#ff8e28"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4928"
                        d="M320.281-171.883h1.966a8.627 8.627 0 0 0 8.533-8.632v-8.407h-19.032v8.407a8.627 8.627 0 0 0 8.533 8.632Z"
                        fill="#1087cb"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4929"
                        d="M510.961-171.883h1.965a8.628 8.628 0 0 0 8.534-8.632v-8.407h-19.033v8.407a8.628 8.628 0 0 0 8.534 8.632Z"
                        fill="#ff8e28"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4930"
                        d="M472.852-171.883h1.921a8.636 8.636 0 0 0 8.577-8.632v-8.407h-19.078v8.407a8.639 8.639 0 0 0 8.58 8.632Z"
                        fill="#1087cb"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4931"
                        d="M396.59-171.883h1.919a8.665 8.665 0 0 0 8.578-8.632v-8.407h-19.076v8.407a8.636 8.636 0 0 0 8.579 8.632Z"
                        fill="#1087cb"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4932"
                        d="M434.7-171.883h1.92a8.636 8.636 0 0 0 8.577-8.632v-8.407H426.12v8.407a8.665 8.665 0 0 0 8.579 8.632Z"
                        fill="#ff8e28"
                        fillRule="evenodd"
                      />
                      <Path
                        data-name="Path 4933"
                        d="M483.35-188.922H235.44v8.407a8.666 8.666 0 0 0 8.578 8.632h1.966a8.627 8.627 0 0 0 8.533-8.632 8.666 8.666 0 0 0 8.578 8.632h1.921a8.637 8.637 0 0 0 8.578-8.632 8.637 8.637 0 0 0 8.578 8.632h1.921a8.637 8.637 0 0 0 8.578-8.632 8.637 8.637 0 0 0 8.578 8.632h1.921a8.666 8.666 0 0 0 8.578-8.632 8.627 8.627 0 0 0 8.533 8.632h1.966a8.627 8.627 0 0 0 8.533-8.632 8.666 8.666 0 0 0 8.578 8.632h1.966a8.627 8.627 0 0 0 8.533-8.632 8.666 8.666 0 0 0 8.578 8.632h1.921a8.637 8.637 0 0 0 8.578-8.632 8.637 8.637 0 0 0 8.578 8.632h1.921a8.638 8.638 0 0 0 8.578-8.632 8.636 8.636 0 0 0 8.579 8.632h1.919a8.665 8.665 0 0 0 8.578-8.632 8.627 8.627 0 0 0 8.534 8.632h1.966a8.629 8.629 0 0 0 8.533-8.632 8.691 8.691 0 0 0 4.456 7.549 8.717 8.717 0 0 0 3.4 1.049l.181.014.162.01c.126.005.252.01.378.01h1.92a8.636 8.636 0 0 0 8.577-8.632 8.637 8.637 0 0 0 8.58 8.632h1.926a8.636 8.636 0 0 0 8.577-8.632 8.639 8.639 0 0 0 8.58 8.632h1.921a8.636 8.636 0 0 0 8.577-8.632 8.637 8.637 0 0 0 8.578 8.632h1.922a8.666 8.666 0 0 0 8.577-8.632 8.628 8.628 0 0 0 8.534 8.632h1.965a8.628 8.628 0 0 0 8.534-8.632v-8.407H483.35Z"
                        fill="#171717"
                        fillRule="evenodd"
                        opacity={0.3}
                        style={{
                          mixBlendMode: 'darken',
                          isolation: 'isolate',
                        }}
                      />
                    </G>
                  </G>
                </G>
                <G data-name="Group 744">
                  <Path
                    data-name="Path 4934"
                    d="m308.4-162.261.606-2.274-1.53-1.788 2.35-.126 1.228-2.007.846 2.2 2.289.547-1.827 1.483.186 2.346-1.975-1.279Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4935"
                    d="m258.211-156.523-2.58-1.387-2.6 1.339.521-2.882-2.078-2.063 2.9-.395 1.32-2.614 1.272 2.638 2.894.448-2.116 2.025Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4936"
                    d="m269.577-161.884.823-2.362-1.479-2.017 2.5.053 1.461-2.03.722 2.394 2.382.762-2.054 1.427.011 2.5-1.992-1.513Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4937"
                    d="m246.067-63.927-1.877-.8-1.724 1.091.182-2.033-1.571-1.3 1.99-.455.753-1.9 1.047 1.752 2.037.131-1.343 1.541Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4938"
                    d="m242.733-85.927 1.488-.487.442-1.5.923 1.264 1.565-.044-.917 1.268.525 1.475-1.49-.48-1.24.955v-1.565Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4939"
                    d="m236.733-104.594-4.314-.593-2.934 3.217-.769-4.286-3.967-1.8 3.839-2.056.483-4.328 3.141 3.015 4.265-.878-1.9 3.919Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4940"
                    d="m245.733-96.261 1.392-1.181-.183-1.816 1.553.959 1.671-.736-.432 1.773 1.216 1.361-1.82.137-.919 1.577-.693-1.689Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4941"
                    d="m306.067-40.261-2.668-.9-2.259 1.681.036-2.817-2.3-1.627 2.69-.836.836-2.69 1.627 2.3 2.817-.036-1.685 2.258Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4942"
                    d="m312.89-68.256 1.284-1.565-.561-1.945 1.885.737 1.676-1.135-.119 2.021 1.6 1.243-1.958.512-.689 1.9-1.092-1.7Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4943"
                    d="M443.948-74.442 442-75.073l-1.625 1.25v-2.05l-1.691-1.16 1.949-.637.58-1.966 1.208 1.657 2.05-.056-1.2 1.661Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4944"
                    d="m510.852-87.916-1.793-1.514-2.264.619.886-2.173-1.288-1.962 2.341.171 1.468-1.831.561 2.279 2.2.83-1.994 1.238Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4945"
                    d="m513.25-63.638 2.95-3.562-1.261-4.451 4.3 1.707 3.844-2.575-.294 4.617 3.637 2.86-4.481 1.142-1.6 4.342-2.476-3.908Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4946"
                    d="m363.841-36.854 2.952-3.562-1.261-4.451 4.3 1.707 3.844-2.575-.294 4.617 3.637 2.86-4.482 1.147-1.6 4.343-2.476-3.908Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4947"
                    d="m510.733-48.594-.789-.6-.94.311.325-.935-.586-.8.99.02.578-.8.287.947.943.3-.812.565Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4948"
                    d="m488.4-39.48.567-1.352-.792-1.233 1.461.122.928-1.134.335 1.427 1.366.533-1.253.76-.085 1.463-1.11-.957Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4949"
                    d="m458.084-43.078-1.547-.607-1.376.93.1-1.659-1.31-1.022 1.608-.418.567-1.562.895 1.4 1.66.056-1.055 1.284Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4950"
                    d="m498.509-161.155-2.764-.936-2.338 1.746.036-2.918-2.383-1.684 2.786-.868.865-2.787 1.686 2.382 2.918-.039-1.744 2.34Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4951"
                    d="m514.726-136.175 1.714-1.247-.055-2.119 1.715 1.241 2-.708-.654 2.016 1.29 1.682h-2.12l-1.2 1.747-.656-2.016Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4952"
                    d="m435.68-161.884-1.491-1.347-1.955.464.821-1.834-1.046-1.716 2 .214 1.309-1.525.414 1.966 1.855.774-1.742 1Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4953"
                    d="m441.656-149.414.5-1.035-.571-1 1.138.152.771-.851.206 1.129 1.047.47-1.01.545-.124 1.141-.831-.792Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4954"
                    d="m305.4-139.624-2.081-.408-1.516 1.483-.255-2.106-1.879-.984 1.924-.893.355-2.091 1.444 1.554 2.1-.309-1.031 1.853Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4955"
                    d="m325.4-44.594.379-1.268-.83-1.031 1.323-.032.728-1.109.439 1.249 1.278.346-1.052.8.066 1.322-1.089-.752Z"
                    fill="#ffc257"
                  />
                  <Path
                    data-name="Path 4956"
                    d="m254.781-39.48-1.962-1.7-2.509.655 1.006-2.39-1.4-2.184 2.584.218 1.645-2 .591 2.525 2.415.945-2.219 1.342Z"
                    fill="#f99128"
                  />
                  <Path
                    data-name="Path 4957"
                    d="m425.286-40.986-1.565-1.839-2.4.247 1.265-2.057-.978-2.208 2.347.567 1.8-1.612.186 2.408 2.089 1.212-2.232.921Z"
                    fill="#ffc257"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </Svg>
      {props.children && props.children}
    </LoyaltyCardView>
  );
};

export {LoyaltyCard};
