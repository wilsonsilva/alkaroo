# Alkaroo

A Google Chrome extension to highlight foods that trigger or alleviate GERD (Gastroesophageal Reflux Disease) symptoms on [Deliveroo](https://deliveroo.co.uk).

__NOTE:__ This is a very alpha proof of concept. It is not optimized or tested.
![Screenshot](https://github.com/wilsonsilva/alkaroo/blob/master/screenshot.png)

##  What is GERD? (Baby don't hurt me)

In short, it is a disease from hell which makes me cough like I have a lung of a smoker every time I eat enjoy certain foods.

The esophagus is the tube that carries food from the throat to the stomach. However, it is not just a simple tube. The lower esophagus has a specialized muscle around it that usually stays tightly closed, opening only to allow food and liquid into the stomach. It acts to prevent the reflux of stomach acid into the esophagus.

Symptoms occur when this specialized muscle weakens and allows stomach acid to splash up into the esophagus. These symptoms include heartburn, chest discomfort, and bitter fluid flowing up into the mouth. Chest discomfort can occur. If the stomach juice trickles into the breathing tubes, hoarseness, cough, and even shortness of breath can occur. This entire problem is called GERD (Gastroesophageal Reflux Disease). A number of factors, including certain foods, may cause the lower esophageal muscle to relax, causing GERD.

## Installation

Extensions that you download from the Chrome Web Store are packaged up as `.crx` files, which is great for distribution, but not so great for development. Recognizing this, Chrome gives you a quick way of loading up your working directory for testing. Let's do that now.

1. Visit [chrome://extensions](chrome://extensions) in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox: The menu's icon is three horizontal bars. and select __Extensions__ under the __More Tools__ menu to get to the same place).

2. Ensure that the __Developer mode__ checkbox in the top right-hand corner is checked.

3. Click __Load unpacked extension...__ to pop up a file-selection dialog.

3. Navigate to the directory in which your extension files live, and select it.

Alternatively, you can drag and drop the directory where your extension files live onto [chrome://extensions](chrome://extensions) in your browser to load it.

If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.