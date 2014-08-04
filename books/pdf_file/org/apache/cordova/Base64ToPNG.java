try {

            //Directory and File
            File dir = new File(dirName);
            if (!dir.exists()) {
                dir.mkdirs();
            }
            File file = new File(dirName, fileName);

            //Avoid overwriting a file
            if (!overwrite && file.exists()) {
                return new PluginResult(PluginResult.Status.OK, "File already exists!");
            }

            //Decode Base64 back to Binary format
            byte[] decodedBytes = Base64.decode(b64String.getBytes());

            //Save Binary file to phone
            file.createNewFile();
            FileOutputStream fOut = new FileOutputStream(file);
            fOut.write(decodedBytes);
            fOut.close();


            return new PluginResult(PluginResult.Status.OK, "Saved successfully!");

        } catch (FileNotFoundException e) {
            return new PluginResult(PluginResult.Status.ERROR, "File not Found!");
        } catch (IOException e) {
            return new PluginResult(PluginResult.Status.ERROR, e.getMessage());
        }

    }
}